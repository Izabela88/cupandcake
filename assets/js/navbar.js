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
  if (currentPosition > previousPosition) {
    header.style.top = '-200px';
  } else {
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

// Change active menu item (link) on page scroll
window.addEventListener('scroll', (e) => {
  let sections = document.querySelectorAll('.section');
  let navLinks = document.querySelectorAll('.nav-link');
  for (let [i, section] of sections.entries()) {
    let box = section.getBoundingClientRect();
    if (box.top <= 150 && box.bottom >= 150) {
      navLinks[i].classList.add('active');
    } else {
      navLinks[i].classList.remove('active');
    }
  }
});

// Scroll to top after click back to top button
const backToTopButton = document.querySelector('#back-to-top-button');

window.addEventListener('scroll', (e) => {
  // Get the current scroll value
  let currentPosition = window.scrollY;

  // If the scroll value is greater than the window height, add a class to the go-up-btn to show it
  if (currentPosition > 300) {
    backToTopButton.className = 'go-up-btn show-btn';
  } else {
    backToTopButton.className = 'go-up-btn hide-btn';
  }
});

const backToTop = () => {
  // Set a variable for the number of pixels we are from the top of the document
  const pxNumber =
    document.documentElement.scrollTop || document.body.scrollTop;
  // If that number is greater than 0, we'll scroll back to 0, or the top of the document
  // Animate that scroll with requestAnimationFrame:
  if (pxNumber > 0) {
    window.requestAnimationFrame(backToTop);
    // ScrollTo takes an x and a y coordinate.
    // Increase the '20' value to get a animate scroll
    window.scrollTo(0, pxNumber - pxNumber / 20);
  }
};

// When the button is clicked, run backtoTop function
backToTopButton.onclick = function (e) {
  e.preventDefault();
  backToTop();
};
