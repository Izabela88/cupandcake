const basketIcon = document.querySelector('.basket');
const shoppingCart = document.querySelector('.shopping-cart-container');
const closeBasket = document.querySelector('.close-shopping-cart');

// Open and close shopping cart
function openBasket() {
  shoppingCart.classList.toggle('show-shopping-cart');
}

basketIcon.addEventListener('click', openBasket);
closeBasket.addEventListener('click', openBasket);
