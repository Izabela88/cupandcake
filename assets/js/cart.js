const imgBasePath = 'assets/images/cupcakes/';
const currency = '£';

let cupcakes = JSON.parse(cupcakesData);
console.log(cupcakes);

// Dynamically create tab cards
cupcakes.forEach(function (cupcake) {
  // create div tab card
  let tabCard = document.createElement('div');
  tabCard.classList = 'tab-card';
  // create image
  let image = document.createElement('img');
  image.classList = 'card-img';
  image.src = imgBasePath.concat(cupcake.image);
  tabCard.appendChild(image);
  // create heading
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

  console.log(tabContent);
});

// Open tab content depending on the type of products
function openTab(evt, type) {
  var i, tabContent, tabLinks;
  tabContent = document.getElementsByClassName('content');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  tabLinks = document.getElementsByClassName('product-tab');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  document.getElementById(type).style.display = 'grid';
  evt.currentTarget.className += ' active';
}

// Default open vegan products
function defaultOpenTab() {
  document.getElementById('defaultOpen').click();
}

defaultOpenTab();
