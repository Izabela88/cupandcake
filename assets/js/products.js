const imgBasePath = 'assets/images/cupcakes/';
const currency = '£';

//Load cupcakes data from products.txt file
let cupcakes = JSON.parse(cupcakesData);

// Dynamically create tab cards
cupcakes.forEach(function (cupcake) {
  // Create div
  let tabCard = document.createElement('div');
  tabCard.classList = 'tab-card';
  // Create cupcake image
  let image = document.createElement('img');
  image.classList = 'card-img';
  image.src = imgBasePath.concat(cupcake.image);
  tabCard.appendChild(image);
  // Create name heading
  let h3 = document.createElement('h3');
  let h3TextNode = document.createTextNode(cupcake.name);
  tabCard.appendChild(h3);
  h3.appendChild(h3TextNode);
  // Create product description
  let p = document.createElement('p');
  let pTextNode = document.createTextNode(cupcake.description);
  tabCard.appendChild(p);
  p.appendChild(pTextNode);
  // Create price heading
  let h4 = document.createElement('h4');
  let h4TextNode = document.createTextNode(currency.concat(cupcake.price));
  tabCard.appendChild(h4);
  h4.appendChild(h4TextNode);
  // Create div which hold basket icon
  let productsBasketBox = document.createElement('div');
  productsBasketBox.classList = 'product-basket-box';
  tabCard.appendChild(productsBasketBox);
  // Create basket icon
  let productsBasketIcon = document.createElement('img');
  productsBasketIcon.classList = 'basket-icon';
  productsBasketIcon.src = 'assets/images/addbasket.png';
  productsBasketBox.appendChild(productsBasketIcon);

  // Add onclick event to basket icons
  productsBasketIcon.onclick = function (e) {
    appendToBasket(cupcake);
    updateQtyCounter();
  };

  const tabContent = document.querySelector(`#${cupcake.type}`);
  tabContent.appendChild(tabCard);
});

// Open tab content depending on the type of product
function openTabContent(evt, type) {
  let tabsContent = document.querySelectorAll('.content');
  for (const tabContent of tabsContent) {
    tabContent.style.display = 'none';
  }
  let productTabs = document.querySelectorAll('.product-tab');
  for (const productTab of productTabs) {
    productTab.className = productTab.className.replace(' active', '');
  }
  document.getElementById(type).style.display = 'grid';
  evt.currentTarget.className += ' active';
}

// Add onclick event to open each tab
document.getElementById('vegan-tab').onclick = function (event) {
  openTabContent(event, 'vegan');
};

document.getElementById('chocolate-tab').onclick = function (event) {
  openTabContent(event, 'chocolate');
};

document.getElementById('fruity-tab').onclick = function (event) {
  openTabContent(event, 'fruity');
};

// Set the open tab by default
function defaultOpenTab() {
  document.getElementById('vegan-tab').click();
}
defaultOpenTab();

// Append item to local storage memory
function appendToBasket(cupcake) {
  let basket = localStorage.Basket;
  let basketItem = {
    id: cupcake.id,
    qty: 1,
    name: cupcake.name,
    price: cupcake.price,
    image: cupcake.image,
  };
  if (!basket) {
    localStorage.Basket = JSON.stringify([basketItem]);
  } else {
    addToBasket(cupcake, basketItem, basket);
  }
}

/*The function shows a toast informing that the item has been added to the cart
The code was copied from the website https://sweetalert2.github.io
*/
const addToBasketToast = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 700,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: 'success',
    title: 'item added to basket',
  });
};

/*
The function will increment by one if an item exists in the basket
else it will insert a new record/item in the basket.
At the end function commit basket to the local storage.
If the maximum qty is reached the alert will be displayed
*/
function addToBasket(cupcake, basketItem, basket) {
  const maxQty = 20;
  let isInBasket = false;
  basket = JSON.parse(basket);
  addToBasketToast();
  for (let item of basket) {
    if (item.id === cupcake.id) {
      isInBasket = true;
      if (item.qty < maxQty) {
        item.qty++;
        break;
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
  }
  if (!isInBasket) {
    basket.push(basketItem);
  }
  localStorage.Basket = JSON.stringify(basket);
}

// Calculate counter quantity
function qtyCounter() {
  let basketCupcakes = JSON.parse(localStorage.Basket);
  let total = 0;
  basketCupcakes.forEach((basketCupcake) => {
    total += basketCupcake.qty;
  });
  return total;
}

// Update displayed counter quantity
function updateQtyCounter() {
  let itemsCounter = document.querySelector('#items-counter');
  let qty = qtyCounter();

  if (itemsCounter.hasChildNodes()) {
    itemsCounter.childNodes[0].nodeValue = qty;
  } else {
    let newQty = document.createTextNode(newQty);
    itemsCounter.appendChild(newQty);
  }
}

// Add onclick animation to basket icon in the product card
const productBasketBoxes = document.querySelectorAll('.product-basket-box');

productBasketBoxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.remove('run-button');
    setTimeout(function () {
      box.classList.add('run-button');
    }, 100);
  });
});
