const imgBasePath = 'assets/images/cupcakes/';
const currency = '£';

//Load cupcakes data from products.txt file
let cupcakes = JSON.parse(cupcakesData);

// Dynamically create tab cards
cupcakes.forEach(function (cupcake) {
  // create div with tab card class name
  let tabCard = document.createElement('div');
  tabCard.classList = 'tab-card';
  // create cupcake image
  let image = document.createElement('img');
  image.classList = 'card-img';
  image.src = imgBasePath.concat(cupcake.image);
  tabCard.appendChild(image);
  // create name heading
  let h3 = document.createElement('h3');
  let h3TextNode = document.createTextNode(cupcake.name);
  tabCard.appendChild(h3);
  h3.appendChild(h3TextNode);
  // create product description
  let p = document.createElement('p');
  let pTextNode = document.createTextNode(cupcake.description);
  tabCard.appendChild(p);
  p.appendChild(pTextNode);
  // create price heading
  let h4 = document.createElement('h4');
  let h4TextNode = document.createTextNode(currency.concat(cupcake.price));
  tabCard.appendChild(h4);
  h4.appendChild(h4TextNode);
  // create div which hold basket icon
  let productsBasketBox = document.createElement('div');
  productsBasketBox.classList = 'product-basket-box';
  tabCard.appendChild(productsBasketBox);
  // create basket icon
  let productsBasketIcon = document.createElement('img');
  productsBasketIcon.classList = 'basket-icon';
  productsBasketIcon.src = 'assets/images/addbasket.png';
  productsBasketBox.appendChild(productsBasketIcon);
  // add onclick event to basket icons
  productsBasketIcon.onclick = function (e) {
    appendToBasket(cupcake);
    updateQtyCounter();
  };

  const tabContent = document.querySelector(`#${cupcake.type}`);
  tabContent.appendChild(tabCard);
});

// Open tab content depending on the type of products
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

// Add onclick event for each tab
document.getElementById('vegan-tab').onclick = function (event) {
  openTabContent(event, 'vegan');
};

document.getElementById('chocolate-tab').onclick = function (event) {
  openTabContent(event, 'chocolate');
};

document.getElementById('fruity-tab').onclick = function (event) {
  openTabContent(event, 'fruity');
};

// Default open vegan products
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
    let isInBasket = false;
    basket = JSON.parse(basket);
    for (let item of basket) {
      if (item.id === cupcake.id) {
        item.qty++;
        isInBasket = true;
        break;
      }
    }
    if (!isInBasket) {
      basket.push(basketItem);
    }
    localStorage.Basket = JSON.stringify(basket);
  }
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
    let qty = document.createTextNode(qty);
    itemsCounter.appendChild(qty);
  }
}

// Add onclick animation to basket icon in the product card
const productBasketBox = document.querySelectorAll('.product-basket-box');

productBasketBox.forEach((box) => {
  box.addEventListener('click', () => {
    box.classList.remove('run-button');

    setTimeout(function () {
      box.classList.add('run-button');
    }, 10);
  });
});
