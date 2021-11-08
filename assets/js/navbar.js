// Smooth scrolling between website sections
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

// Variable which stores position of page
let previousPosition;
window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  // Get the scroll position
  let currentPosition =
    window.pageYOffset || document.documentElement.currentPosition;
  // Check weather the page is scrolled up or down
  if (currentPosition > previousPosition && window.innerWidth > 1050) {
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
  openSidebar = true;
  document.getElementById('my-sidebar').style.width = '50%';
});
/* After pressing sidebar links and scrolling to a given section, 
the sidebar closes automatically*/
for (const button of closeButtons) {
  openSidebar = false;
  button.addEventListener('click', function (e) {
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

// Scroll to top after click 'back to top button'
const backToTopButton = document.querySelector('#back-to-top-button');

window.addEventListener('scroll', (e) => {
  // Get the current scroll value
  let currentPosition = window.scrollY;

  if (currentPosition > 300) {
    backToTopButton.className = 'go-up-btn show-btn';
  } else {
    backToTopButton.className = 'go-up-btn hide-btn';
  }
});

/* The function moves the page up with animate scrolling
 with using window.requestAnimationFrame() */
const backToTop = () => {
  // Set a variable for the number of pixels we are from the top of the document
  const pxNumber =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (pxNumber > 0) {
    window.requestAnimationFrame(backToTop);
    window.scrollTo(0, pxNumber - pxNumber / 20);
  }
};

// Add onclick event listener to 'back to top button'
backToTopButton.onclick = function (e) {
  e.preventDefault();
  backToTop();
};
