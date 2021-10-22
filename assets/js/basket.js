const basketIcon = document.querySelector('.basket');
const shoppingCartContainer = document.querySelector(
  '.shopping-cart-container'
);
const closeBasket = document.querySelector('.close-shopping-cart');
const imageBasePath = 'assets/images/cupcakes/';
const basketContainer = document.querySelector('.basket-container');

//Dynamically create html basket items
function buildBasketItem(item) {
  productBox = document.createElement('div');
  productBox.setAttribute('id', `basket-id-${item.id}`);
  productBox.className = 'product-box';

  let productImage = document.createElement('img');
  productImage.classList = 'product-image';
  productImage.src = imageBasePath.concat(item.image);
  productBox.appendChild(productImage);

  let description = document.createElement('div');
  description.className = 'product-description';
  productBox.appendChild(description);

  let productName = document.createElement('p');
  let productNameTextNode = document.createTextNode(item.name);
  productName.className = 'cupcake-name';
  productName.appendChild(productNameTextNode);
  description.appendChild(productName);

  let productPrice = document.createElement('p');
  productPrice.className = 'cupcake-price';
  let cupcakePrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
  }).format(item.price);
  productPrice.textContent = cupcakePrice;
  description.appendChild(productPrice);

  let quantity = document.createElement('div');
  quantity.className = 'product-quantity';
  productBox.appendChild(quantity);

  let sumProductPrice = document.createElement('div');
  sumProductPrice.className = 'total-product-price';
  let totalCost = totalProductPrice(item);
  sumProductPrice.textContent = totalCost;
  productBox.appendChild(sumProductPrice);

  let minusBtn = document.createElement('button');
  minusBtn.className = 'minus-btn';
  minusBtn.textContent = '-';
  quantity.appendChild(minusBtn);
  minusBtn.onclick = function (e) {
    decrementProduct(item, sumProductPrice);
  };

  let quantityInput = document.createElement('input');
  quantityInput.className = 'quantity-input';
  quantityInput.setAttribute('id', `input-id-${item.id}`);
  quantityInput.setAttribute('type', 'text');
  quantityInput.setAttribute('value', item.qty);
  quantityInput.setAttribute('readonly', true);
  quantity.appendChild(quantityInput);

  let plusBtn = document.createElement('button');
  plusBtn.className = 'plus-btn';
  plusBtn.textContent = '+';
  quantity.appendChild(plusBtn);
  plusBtn.onclick = function (e) {
    incrementProduct(item, sumProductPrice);
  };

  let deleteIcon = document.createElement('div');
  deleteIcon.className = 'delete-icon';
  deleteIcon.innerHTML = '<i class="far fa-trash-alt" ></i>';
  productBox.appendChild(deleteIcon);
  deleteIcon.onclick = function (e) {
    deleteProduct(item);
  };

  basketContainer.appendChild(productBox);
}

// Open and close shopping cart and create new basket elements or refresh items quantity
function openBasket(e) {
  e.preventDefault();
  shoppingCartContainer.classList.toggle('show-shopping-cart');
  let basketCupcakes = JSON.parse(localStorage.Basket);

  basketCupcakes.forEach((item) => {
    let productQty = document.querySelector(`#input-id-${item.id}`);
    if (!productQty) {
      buildBasketItem(item);
    } else {
      productQty.setAttribute('value', item.qty);
    }
  });

  updateTotalPrice();
  updateTotalProductsQty();
}

// Add products inside the basket
function incrementProduct(item, sumProductPrice) {
  const maxQty = 20;
  if (item.qty < maxQty) {
    let basketCupcakes = JSON.parse(localStorage.Basket);
    basketCupcakes.filter(addQty);
    //add items
    function addQty(basketItem) {
      if (basketItem.id === item.id) {
        let productQty = document.querySelector(`#input-id-${item.id}`);
        basketItem.qty++;
        productQty.setAttribute('value', basketItem.qty);
        item.qty = basketItem.qty;
        sumProductPrice.textContent = totalProductPrice(item);
      }
    }
    localStorage.Basket = JSON.stringify(basketCupcakes);
    updateTotalPrice();
    updateTotalProductsQty();
  } else {
    swal({
      title: 'you can order up to 20 cupcakes of the same type',
      text: '* for larger orders, please contact us by filling out the form in the section "contact us"',
    });
  }
}

// Subtract products inside the basket
function decrementProduct(item, sumProductPrice) {
  const minQty = 1;

  if (item.qty > minQty) {
    let basketCupcakes = JSON.parse(localStorage.Basket);
    basketCupcakes.filter(subtractQty);
    //subtract items
    function subtractQty(basketItem) {
      if (basketItem.id === item.id) {
        let productQty = document.querySelector(`#input-id-${item.id}`);
        basketItem.qty--;
        productQty.setAttribute('value', basketItem.qty);
        item.qty = basketItem.qty;
        sumProductPrice.textContent = totalProductPrice(item);
      }
    }
    localStorage.Basket = JSON.stringify(basketCupcakes);
    updateTotalPrice();
    updateTotalProductsQty();
  }
}

// Remove product from the basket
function deleteProduct(item) {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let productBox = document.querySelector(`#basket-id-${item.id}`);
  basketCupcakes.splice(
    basketCupcakes.findIndex((basketItem) => basketItem.id === item.id),
    1
  );
  localStorage.Basket = JSON.stringify(basketCupcakes);
  updateTotalPrice();
  updateTotalProductsQty();
  productBox.remove();
}

// Sum of total product price in product box
function totalProductPrice(item) {
  let totalProductCost = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
  }).format(item.qty * item.price);
  return totalProductCost;
}

// Sum price of all products in the basket
function totalBasketPrice() {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let total = 0;
  basketCupcakes.forEach((basketCupcake) => {
    let totalProductPrice = basketCupcake.qty * basketCupcake.price;
    total = total + totalProductPrice;
  });
  let totalFormattedPrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
  }).format(total);
  return totalFormattedPrice;
}

// Update total displayed price in the basket
function updateTotalPrice() {
  let totalPrice = document.querySelector('#total-price');
  if (totalPrice.hasChildNodes()) {
    totalPrice.childNodes[0].nodeValue = totalBasketPrice();
  } else {
    let price = document.createTextNode(totalBasketPrice());
    totalPrice.appendChild(price);
  }
}

//Calculate total products quantity
function totalProductsQty() {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let total = 0;
  basketCupcakes.forEach((basketCupcake) => {
    total += basketCupcake.qty;
  });

  return total;
}

// Update displayed products quantity
function updateTotalProductsQty() {
  let itemsCounter = document.querySelector('#items-counter');
  let summaryItems = document.querySelector('.summary-items');
  let qty = totalProductsQty();
  let summaryItemsSuffix = 'cupcakes';

  if (qty === 1) {
    summaryItemsSuffix = 'cupcake';
  }

  let summaryItemsText = `${qty} ${summaryItemsSuffix}`;
  if (itemsCounter.hasChildNodes()) {
    itemsCounter.childNodes[0].nodeValue = qty;
  } else {
    let qty = document.createTextNode(qty);
    itemsCounter.appendChild(qty);
  }

  if (summaryItems.hasChildNodes()) {
    summaryItems.childNodes[0].nodeValue = summaryItemsText;
  } else {
    summaryItems.appendChild(document.createTextNode(summaryItemsText));
  }

  showAlertMsg();
  disabledMinusBtn();
}

// Show alert message when basket is empty
function showAlertMsg() {
  let containerProducts = document.querySelectorAll('.product-box');
  let emptyCart = document.querySelector('#empty-basket');
  let basketCupcakes = JSON.parse(localStorage.Basket);

  containerProducts.forEach((containerProduct) => {
    if (basketCupcakes.length > 0) {
      containerProduct.style.display = 'flex';
      emptyCart.style.display = 'none';
    } else {
      containerProduct.style.display = 'none';
      emptyCart.style.display = 'block';
    }
  });
}

// Make minus button disabled when qty of products is drop to 1
function disabledMinusBtn() {
  let productsQty = document.querySelectorAll('.product-quantity');

  productsQty.forEach((productQty) => {
    let minusBtn = productQty.children[0];
    let qtyInput = productQty.children[1];

    if (qtyInput.value <= 1) {
      minusBtn.disabled = true;
    } else {
      minusBtn.disabled = false;
    }
  });
}

basketIcon.addEventListener('click', openBasket);
closeBasket.addEventListener('click', openBasket);
updateTotalProductsQty();
