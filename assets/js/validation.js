const form = document.querySelector('#contact-form');
const username = document.querySelector('#fullname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// Add submit event listener to form
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
});
