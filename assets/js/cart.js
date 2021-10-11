const imgPath = 'assets/images/cupcakes/';
const currency = '£';
let cupcakes = JSON.parse(cupcakesData);
console.log(cupcakes);

cupcakes.forEach(function (cupcake) {
  let tabCard = document.createElement('div');
  tabCard.classList = 'tab-card';

  console.log(tabCard);
  let image = document.createElement('img');
  image.classList = 'card-img';
  image.src = imgPath.concat(cupcake.image);
  tabCard.appendChild(image);

  let h3 = document.createElement('h3');
  let h3TextNode = document.createTextNode(cupcake.name);
  tabCard.appendChild(h3);
  h3.appendChild(h3TextNode);

  let p = document.createElement('p');
  let pTextNode = document.createTextNode(cupcake.description);
  tabCard.appendChild(p);
  p.appendChild(pTextNode);

  let h4 = document.createElement('h4');
  let h4TextNode = document.createTextNode(currency.concat(cupcake.price));
  tabCard.appendChild(h4);
  h4.appendChild(h4TextNode);

  let basketIcon = document.createElement('img');
  basketIcon.classList = 'basket-icon';
  basketIcon.src = 'assets/images/addbasket.svg';
  tabCard.appendChild(basketIcon);

  const tabContent = document.querySelector(`#${cupcake.type}`);
  tabContent.appendChild(tabCard);
});
