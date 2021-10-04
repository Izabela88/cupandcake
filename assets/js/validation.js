const form = document.querySelector('#contact-form');
const username = document.querySelector('#fullname');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

// This function check if imput field is empty
const required = (value) => (value === '' ? false : true);

// This function check if the length argument is between max and min argument
const between = (length, min, max) =>
  length < min || length > max ? false : true;

// Check if username field is complete correct function
const checkUsernameField = () => {
  let isValid = false;
  const min = 3,
    max = 25;
  // set variable which store username value and add trim method for removes whitespace from both sides of a string
  const usernameValue = username.value.trim();

  if (!required(usernameValue)) {
    showErrorMessage(username, 'this field can not be empty!');
  } else if (!between(usernameValue.length, min, max)) {
    showErrorMessage(
      username,
      `your full name must contain between ${min} and ${max} letters`
    );
  } else {
    removeErrorMessage(username);
    isValid = true;
  }
  return isValid;
};

// Show the error message function
const showErrorMessage = (input, message) => {
  // get the parent element where the error message will appear
  const parentElement = input.parentElement;
  // show the error message
  const errorMsg = parentElement.querySelector('.error-msg');
  errorMsg.textContent = message;
};

// Remove the error message function
const removeErrorMessage = (input) => {
  // get the parent element from which the error message will be removed
  const parentElement = input.parentElement;
  // remove the error message
  const errorMsg = parentElement.querySelector('.error-msg');
  errorMsg.textContent = '';
};

// Add submit event listener to form
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  let isUsernameValid = checkUsernameField();
  let isFormValid = isUsernameValid;
  if (isFormValid) {
    alert('Your message has been sent');
  } else {
    alert('Please fill in all fields correctly');
  }
  form.reset();
});
