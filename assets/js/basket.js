const basketIcon = document.querySelector('.basket');
const shoppingCartContainer = document.querySelector(
  '.shopping-cart-container'
);
const shoppingCartBox = document.querySelector('.shopping-cart-box');
const closeBasket = document.querySelector('.close-shopping-cart');
const imageBasePath = 'assets/images/cupcakes/';
const basketContainer = document.querySelector('.basket-container');
const purchaseButton = document.querySelector('.purchase-button');

// Dynamically create html basket items
function buildBasketItem(item) {
  // Create div and add class name and dynamically create id
  productBox = document.createElement('div');
  productBox.setAttribute('id', `basket-id-${item.id}`);
  productBox.className = 'product-box';
  // Create product image
  let productImage = document.createElement('img');
  productImage.classList = 'product-image';
  productImage.src = imageBasePath.concat(item.image);
  productBox.appendChild(productImage);
  // Create div
  let description = document.createElement('div');
  description.className = 'product-description';
  productBox.appendChild(description);
  // Create paragraph witj product name
  let productName = document.createElement('p');
  let productNameTextNode = document.createTextNode(item.name);
  productName.className = 'cupcake-name';
  productName.appendChild(productNameTextNode);
  description.appendChild(productName);
  // Create product price and format it on british currency
  let productPrice = document.createElement('p');
  productPrice.className = 'cupcake-price';
  let cupcakePrice = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
  }).format(item.price);
  productPrice.textContent = cupcakePrice;
  description.appendChild(productPrice);
  // Create div
  let quantity = document.createElement('div');
  quantity.className = 'product-quantity';
  productBox.appendChild(quantity);
  // Create total product price
  let sumProductPrice = document.createElement('div');
  sumProductPrice.className = 'total-product-price';
  let totalCost = totalProductPrice(item);
  sumProductPrice.textContent = totalCost;
  productBox.appendChild(sumProductPrice);
  // Create minus button
  let minusBtn = document.createElement('button');
  minusBtn.className = 'minus-btn';
  minusBtn.textContent = '-';
  quantity.appendChild(minusBtn);
  minusBtn.onclick = function (e) {
    decrementProduct(item, sumProductPrice);
  };
  // Create qty input
  let quantityInput = document.createElement('input');
  quantityInput.className = 'quantity-input';
  quantityInput.setAttribute('id', `input-id-${item.id}`);
  quantityInput.setAttribute('type', 'text');
  quantityInput.setAttribute('value', item.qty);
  quantityInput.setAttribute('readonly', true);
  quantity.appendChild(quantityInput);
  // Create plus button
  let plusBtn = document.createElement('button');
  plusBtn.className = 'plus-btn';
  plusBtn.textContent = '+';
  quantity.appendChild(plusBtn);
  plusBtn.onclick = function (e) {
    incrementProduct(item, sumProductPrice);
  };
  // Create delete icon
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
function openBasket() {
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
  // Update total price and qty every time basket is opened
  updateTotalPrice();
  updateTotalProductsQty();
}

// Add products inside the basket
function incrementProduct(item, sumProductPrice) {
  const maxQty = 20;
  if (item.qty < maxQty) {
    let basketCupcakes = JSON.parse(localStorage.Basket);
    basketCupcakes.filter(addQty);
    // Add items
    function addQty(basketItem) {
      if (basketItem.id === item.id) {
        let productQty = document.querySelector(`#input-id-${item.id}`);
        basketItem.qty++;
        productQty.setAttribute('value', basketItem.qty);
        item.qty = basketItem.qty;
        sumProductPrice.textContent = totalProductPrice(item);
        // Commit basket
        localStorage.Basket = JSON.stringify(basketCupcakes);
      }
    }
    // Update total price and qty on each increament operation
    updateTotalPrice();
    updateTotalProductsQty();
  } else {
    Swal.fire({
      title: 'You can order up to 20 cupcakes of the same type',
      text: '* for larger orders, please contact us by filling out the form in the section "contact us"',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#f4afd0',
      cancelButtonColor: '#d33',
    });
  }
}

// Subtract products inside the basket
function decrementProduct(item, sumProductPrice) {
  const minQty = 1;

  if (item.qty > minQty) {
    let basketCupcakes = JSON.parse(localStorage.Basket);
    basketCupcakes.filter(subtractQty);
    // Subtract items
    function subtractQty(basketItem) {
      if (basketItem.id === item.id) {
        let productQty = document.querySelector(`#input-id-${item.id}`);
        basketItem.qty--;
        productQty.setAttribute('value', basketItem.qty);
        item.qty = basketItem.qty;
        sumProductPrice.textContent = totalProductPrice(item);
        // Commit basket
        localStorage.Basket = JSON.stringify(basketCupcakes);
      }
    }

    // Update total price and qty on each decrement operation
    updateTotalPrice();
    updateTotalProductsQty();
  }
}

// Remove product from the basket and local storage
const deleteProduct = (item) => {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let productBox = document.querySelector(`#basket-id-${item.id}`);
  basketCupcakes.splice(
    basketCupcakes.findIndex((basketItem) => basketItem.id === item.id),
    1
  );
  localStorage.Basket = JSON.stringify(basketCupcakes);

  // Update total price and qty on each deletion
  updateTotalPrice();
  updateTotalProductsQty();
  productBox.remove();
};

// Sum of total product price in product box
const totalProductPrice = (item) => {
  let totalProductCost = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'GBP',
  }).format(item.qty * item.price);
  return totalProductCost;
};

// Sum price of all products in the basket. Returns total formatted price.
const totalBasketPrice = () => {
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
};

// Update total displayed price in the basket
const updateTotalPrice = () => {
  let totalPrice = document.querySelector('#total-price');
  if (totalPrice.hasChildNodes()) {
    totalPrice.childNodes[0].nodeValue = totalBasketPrice();
  } else {
    let price = document.createTextNode(totalBasketPrice());
    totalPrice.appendChild(price);
  }
};

// Calculate total products quantity. Returns total qty as integer
function totalProductsQty() {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let total = 0;
  basketCupcakes.forEach((basketCupcake) => {
    total += basketCupcake.qty;
  });

  return total;
}

// Update displayed all products quantity
const updateTotalProductsQty = () => {
  let itemsCounter = document.querySelector('#items-counter');
  let summaryItems = document.querySelector('.summary-items');
  let qty = totalProductsQty();

  // Update counter quantity
  if (itemsCounter.hasChildNodes()) {
    itemsCounter.childNodes[0].nodeValue = qty;
  } else {
    let qty = document.createTextNode(qty);
    itemsCounter.appendChild(qty);
  }

  // Create a plural or singular suffix
  let summaryItemsSuffix = qty === 1 ? 'cupcake' : 'cupcakes';
  let summaryItemsText = `${qty} ${summaryItemsSuffix}`;

  // Update total qty in the basket summary
  if (summaryItems.hasChildNodes()) {
    summaryItems.childNodes[0].nodeValue = summaryItemsText;
  } else {
    summaryItems.appendChild(document.createTextNode(summaryItemsText));
  }

  if (qty === 0) {
    purchaseButton.disabled = true;
  } else {
    purchaseButton.disabled = false;
  }

  showAlertMsg();
  disabledMinusBtn();
};

// Show alert message when basket is empty
const showAlertMsg = () => {
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
};

// Make minus button disabled when product qty dropped to 1
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

// Remove products from basket after submit the order
const removeBox = () => {
  let productsBoxes = document.querySelectorAll('.product-box');
  productsBoxes.forEach((productBox) => {
    productBox.remove();
  });
};

// Function is submit the purchase with Sweet Alert library
function submitPurchase(e) {
  e.preventDefault();
  let qty = totalProductsQty();
  if (qty < 5) {
    Swal.fire({
      title: 'Ouch!',
      text: 'Your order must contain a min of five cupcakes!',
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonColor: '#f4afd0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK',
    });
  } else {
    Swal.fire({
      title: 'Wait!',
      text: 'Are you sure you want to complete the purchase?',
      icon: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#f4afd0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SURE',
      cancelButtonText: 'NOPE',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Please enter your email address',
          input: 'email',
          showConfirmButton: true,
          showCancelButton: true,
          confirmButtonColor: '#f4afd0',
          cancelButtonColor: '#d33',
          inputPlaceholder: 'Enter your email address',
          confirmButtonText: 'NEXT',
          cancelButtonText: 'CANCEL',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: 'Please enter your full name',
              input: 'text',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonColor: '#f4afd0',
              cancelButtonColor: '#d33',
              inputPlaceholder: 'Enter your full name',
              confirmButtonText: 'NEXT',
              cancelButtonText: 'CANCEL',
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire({
                  title: 'Please enter your full address',
                  input: 'text',
                  showConfirmButton: true,
                  showCancelButton: true,
                  confirmButtonColor: '#f4afd0',
                  cancelButtonColor: '#d33',
                  inputPlaceholder: 'Enter your full address',
                  confirmButtonText: 'ORDER',
                  cancelButtonText: 'CANCEL',
                }).then((result) => {
                  if (result.isConfirmed) {
                    localStorage.Basket = JSON.stringify([]);
                    showAlertMsg();
                    updateTotalProductsQty();
                    updateTotalPrice();
                    removeBox();
                    Swal.fire({
                      icon: 'success',
                      title: 'HURRAY!',
                      confirmButtonColor: '#f4afd0',
                      text:
                        'Thank you for the order! All delivery' +
                        ' details has been sent to your email',
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
  }
}

purchaseButton.addEventListener('click', submitPurchase);

// Add on click listener to open basket
basketIcon.addEventListener('click', openBasket);
closeBasket.addEventListener('click', openBasket);

// Update total product qty when application is first time loaded
updateTotalProductsQty();
