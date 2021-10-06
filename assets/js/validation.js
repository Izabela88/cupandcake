const form = document.querySelector('#contact-form');
const username = document.querySelector('#fullname');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');
const button = document.querySelector('.send-btn');
const inputs = document.querySelectorAll('.text-input');

// This function check if imput field is empty
const required = (value) => (value === '' ? false : true);

// This function check if the length argument is between max and min argument
const between = (length, min, max) =>
  length < min || length > max ? false : true;

// This function checks if the user only uses letters
const onlyLettersRegex = (usernameValue) => {
  const letters = /^[a-zA-Z]+$/;
  return letters.test(usernameValue);
};

// This function check if the email has correct form
const isEmailValid = (emailAddress) => {
  const userEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return userEmail.test(emailAddress);
};

// Function check if full name field is complete correct
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
      `your name must contain between ${min} and ${max} letters`
    );
  } else if (!onlyLettersRegex(usernameValue)) {
    showErrorMessage(username, 'you can only use letters');
  } else {
    removeErrorMessage(username);
    isValid = true;
  }
  return isValid;
};

// Function check if email field is complete correct
const checkUserEmail = () => {
  const min = 2,
    max = 150;
  let isValid = false;
  const userEmail = email.value.trim();
  if (!required(userEmail)) {
    showErrorMessage(email, 'this field can not be empty!');
  } else if (!isEmailValid(userEmail)) {
    showErrorMessage(email, 'email address is not valid');
  } else if (!between(userEmail.length, min, max)) {
    showErrorMessage(
      email,
      `your email must contain between ${min} and ${max} characters`
    );
  } else {
    removeErrorMessage(email);
    isValid = true;
  }
  return isValid;
};

// Function check if textarea field is complete correct
const checkUserMessage = () => {
  const min = 2,
    max = 500;
  let isValid = false;
  const userMessage = textarea.value.trim();
  if (!required(userMessage)) {
    showErrorMessage(textarea, 'this field can not be empty!');
    console.log('working');
  } else if (!between(userMessage.length, min, max)) {
    showErrorMessage(
      textarea,
      `your message must contain between ${min} and ${max} characters`
    );
  } else {
    removeErrorMessage(textarea);
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
  let isUserEmailValid = checkUserEmail();
  let isMessageValid = checkUserMessage();
  let isFormValid = isUsernameValid && isUserEmailValid && isMessageValid;

  if (isFormValid) {
    alert('Your message has been sent') && form.submit();
  }
  form.reset();
});

// Disabled button becomes active when the user starts filling the form
button.disabled = true;

for (const field of inputs) {
  field.addEventListener('input', (e) => {
    e.preventDefault();
    if (field.value === '') {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
}
