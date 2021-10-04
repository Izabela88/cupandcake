const form = document.querySelector('#contact-form');
const username = document.querySelector('#fullname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// Add submit event listener to form
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
});

// this function check if imput field is empty
const required = (value) => (value === '' ? false : true);

// this function check if the length argument is between max and min argument
const between = (length, min, max) =>
  length < min || length > max ? false : true;
