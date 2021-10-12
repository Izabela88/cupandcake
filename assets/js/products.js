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
  let h3TextNode = document.createTextNode(`${cupcake.name}`);
  tabCard.appendChild(h3);
  h3.appendChild(h3TextNode);
  // create product description
  let p = document.createElement('p');
  let pTextNode = document.createTextNode(`${cupcake.description}`);
  tabCard.appendChild(p);
  p.appendChild(pTextNode);
  // create price heading
  let h4 = document.createElement('h4');
  let h4TextNode = document.createTextNode(currency.concat(cupcake.price));
  tabCard.appendChild(h4);
  h4.appendChild(h4TextNode);
  // create basket icon
  let basketIcon = document.createElement('img');
  basketIcon.classList = 'basket-icon';
  basketIcon.src = 'assets/images/addbasket.svg';
  tabCard.appendChild(basketIcon);

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
