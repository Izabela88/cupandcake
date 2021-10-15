const basketIcon = document.querySelector('.basket');
const shoppingCartContainer = document.querySelector(
  '.shopping-cart-container'
);
const closeBasket = document.querySelector('.close-shopping-cart');
const imageBasePath = 'assets/images/cupcakes/';
const basketContainer = document.querySelector('.basket-container');

// Open and close shopping cart
function openBasket(e) {
  e.preventDefault();
  shoppingCartContainer.classList.toggle('show-shopping-cart');
  let basketCupcakes = JSON.parse(localStorage.Basket);

  basketCupcakes.forEach((item) => {
    let productBox = document.querySelector(`#basket-id-${item.id}`);

    if (!productBox) {
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

      let quantityInput = document.createElement('input');
      quantityInput.className = 'quantity-input';
      quantityInput.setAttribute('type', 'text');
      quantityInput.setAttribute('value', item.qty);
      quantity.appendChild(quantityInput);

      let plusBtn = document.createElement('button');
      plusBtn.className = 'plus-btn';
      plusBtn.textContent = '+';
      quantity.appendChild(plusBtn);

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

      basketContainer.appendChild(productBox);
    }
  });
}

basketIcon.addEventListener('click', openBasket);
closeBasket.addEventListener('click', openBasket);
