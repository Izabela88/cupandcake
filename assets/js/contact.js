const form = document.querySelector('#contact-form');
const username = document.querySelector('#fullname');
const email = document.querySelector('#email');
const textarea = document.querySelector('#textarea');
const button = document.querySelector('.send-btn');
const inputs = document.querySelectorAll('.text-input');
const modal = document.querySelector('#contact-modal');
const closeButton = document.querySelector('.close-modal-btn');
const openNewsletterButton = document.querySelector('#open-newsletter');
const closeNewsletter = document.querySelector('.close-newsletter');

// This function checks if imput field is empty
const required = (value) => (value === '' ? false : true);

// This function checks if the length argument is between max and min argument
const between = (length, min, max) =>
  length < min || length > max ? false : true;

// This function checks if the user only uses letters
const onlyLettersRegex = (usernameValue) => {
  const letters = /^[a-zA-Z]+$/;
  return letters.test(usernameValue);
};

// This function checks with regex if the email has correct form
const isEmailValid = (emailAddress) => {
  const userEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return userEmail.test(emailAddress);
};

// Function checks if full name field is complete correct
const checkUsernameField = () => {
  let isValid = false;
  const min = 2,
    max = 25;

  // Trim username
  const usernameValue = username.value.trim();

  if (!required(usernameValue)) {
    showErrorMessage(username, 'this field can not be empty!');
  } else if (!onlyLettersRegex(usernameValue)) {
    showErrorMessage(username, 'you can only use letters');
  } else if (!between(usernameValue.length, min, max)) {
    showErrorMessage(
      username,
      `your name must contain between ${min} and ${max} letters`
    );
  } else {
    removeErrorMessage(username);
    isValid = true;
  }
  return isValid;
};

// Function checks if email field is complete correct
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

// Function checks if textarea field is complete correct
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
  const parentElement = input.parentElement;
  const errorMsg = parentElement.querySelector('.error-msg');
  errorMsg.textContent = message;
};

// Remove the error message function
const removeErrorMessage = (input) => {
  const parentElement = input.parentElement;
  const errorMsg = parentElement.querySelector('.error-msg');
  errorMsg.textContent = '';
};

/* Function that sends the email when a user submits the form
with using EmailJs service */
function sendEmail() {
  let fullName = document.querySelector('#fullname').value;
  let email = document.querySelector('#email').value;
  let message = document.querySelector('#textarea').value;

  let templateParams = {
    to_name: 'Izabela',
    from_name: fullName,
    user_email: email,
    message: message,
  };

  emailjs.send('service_ipdekum', 'template_ybnc5td', templateParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text);
    },
    function (error) {
      console.log('FAILED...', error);
    }
  );
}

/* Add submit event listener to form
Check all form validations
*/
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  let isUsernameValid = checkUsernameField();
  let isUserEmailValid = checkUserEmail();
  let isMessageValid = checkUserMessage();
  let isFormValid = isUsernameValid && isUserEmailValid && isMessageValid;
  if (isFormValid) {
    sendEmail();
    openModal;
    form.reset();
    button.disabled = true;
  } else {
    !openModal();
    !sendEmail();
  }
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

// Add input event listener for validate each field during complete the form
form.addEventListener('input', function (e) {
  switch (e.target.id) {
    case 'fullname':
      checkUsernameField();
      break;
    case 'email':
      checkUserEmail();
      break;
    case 'textarea':
      checkUserMessage();
      break;
  }
});

// Function opens newsletter
function openNewsletter() {
  let showNewsletterWindow = document.querySelector('.newsletter-wrapper');
  showNewsletterWindow.classList.toggle('show-newsletter');
}

openNewsletterButton.addEventListener('click', openNewsletter);
closeNewsletter.addEventListener('click', openNewsletter);

// Function opens the modal window after submit contact form
function openModal() {
  modal.classList.toggle('show-modal');
}

button.addEventListener('click', openModal);
closeButton.addEventListener('click', openModal);
