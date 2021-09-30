// smooth scrolling
document.querySelectorAll('.scroll').forEach((cliked) => {
  cliked.onclick = function (e) {
    e.preventDefault();
    let anchor = this.getAttribute('href');
    let target = document.querySelector(anchor);

    let elementPosition = target.offsetTop;
    let offsetPosition = elementPosition;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };
});

// Change navbar background color on scrolling
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  // pageYOffset or scrollY
  if (window.pageYOffset > 100 && window.innerWidth > 1050) {
    header.classList.add('bg-color');
  } else {
    header.classList.remove('bg-color');
  }
});

// Hide and show navbar on scrolling
// variable which stores position of page
let previousPosition;
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  //  get the scroll position
  let currentPosition =
    window.pageYOffset || document.documentElement.currentPosition;
  //  check weather the page is scrolled up or down
  if (currentPosition > previousPosition && window.innerWidth > 1050) {
    header.style.top = '-200px';
  } else {
    console.log('go up');
    header.style.top = '0';
  }
  previousPosition = currentPosition;
});

// Open and close sidebar for small devices
const hamburgerIcon = document.querySelector('#hamburger-icon');
const closeButtons = document.querySelectorAll('.close-sidebar');
let openSidebar;

hamburgerIcon.addEventListener('click', function (e) {
  console.log(closeButtons);
  openSidebar = true;
  document.getElementById('my-sidebar').style.width = '50%';
});

for (button of closeButtons) {
  button.addEventListener('click', function (e) {
    openSidebar = false;
    document.getElementById('my-sidebar').style.width = null;
  });
}
