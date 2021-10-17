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
  let productPriceTextNode = document.createTextNode(item.price);
  productPrice.className = 'cupcake-price';
  productPrice.appendChild(productPriceTextNode);
  description.appendChild(productPrice);

  let quantity = document.createElement('div');
  quantity.className = 'product-quantity';
  productBox.appendChild(quantity);

  let minusBtn = document.createElement('button');
  minusBtn.className = 'minus-btn';
  minusBtn.textContent = '-';
  quantity.appendChild(minusBtn);
  minusBtn.onclick = function (e) {
    decrementProduct(item);
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
    incrementProduct(item);
  };

  let price = document.createElement('div');
  price.className = 'total-product-price';
  let totalCost = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
  }).format(item.qty * item.price);
  price.textContent = totalCost;
  productBox.appendChild(price);

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
}

// Add products inside the basket
function incrementProduct(item) {
  const maxQty = 60;
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
      }
    }
    localStorage.Basket = JSON.stringify(basketCupcakes);
  } else {
    alert('Max 60 cupcakes!');
  }
}

// Subtract products inside the basket
function decrementProduct(item) {
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
      }
    }
    localStorage.Basket = JSON.stringify(basketCupcakes);
  } else {
    alert('Min 1 cupcake!');
  }
}

// Remove product from basket
function deleteProduct(item) {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let productBox = document.querySelector(`#basket-id-${item.id}`);
  basketCupcakes.splice(
    basketCupcakes.findIndex((basketItem) => basketItem.id === item.id),
    1
  );
  localStorage.Basket = JSON.stringify(basketCupcakes);
  productBox.remove();
}

basketIcon.addEventListener('click', openBasket);
closeBasket.addEventListener('click', openBasket);
