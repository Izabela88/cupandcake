const form = document.querySelector('#contact-form');
const username = document.querySelector('#fullname');
const email = document.querySelector('#email');
const newsletterEmail = document.querySelector('#newsletter-email');
const textarea = document.querySelector('#textarea');
const closeButton = document.querySelector('.close-modal-btn');
const openNewsletterButton = document.querySelector('#open-newsletter');
const closeNewsletter = document.querySelector('.close-newsletter');
const formNewsletter = document.querySelector('#newsletter-form');

// 'Send' button is disabled by default
const button = document.querySelector('.send-btn');
button.disabled = true;

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

/* Function checks if full name field is complete correct

*/
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

// Functions checks if email field in newsletter form is complete correct
const checkNewsletterEmail = () => {
  const min = 2,
    max = 150;
  let isValid = false;
  const userNewsletterEmail = newsletterEmail.value.trim();
  if (!required(userNewsletterEmail)) {
    showErrorMessage(newsletterEmail, 'this field can not be empty!');
  } else if (!isEmailValid(userNewsletterEmail)) {
    showErrorMessage(newsletterEmail, 'email address is not valid');
  } else if (!between(userNewsletterEmail.length, min, max)) {
    showErrorMessage(
      newsletterEmail,
      `your email must contain between ${min} and ${max} characters`
    );
  } else {
    removeErrorMessage(newsletterEmail);
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

// Function shows the error message
const showErrorMessage = (input, message) => {
  const parentElement = input.parentElement;
  const errorMsg = parentElement.querySelector('.error-msg');
  errorMsg.textContent = message;
};

// Function removes the error message
const removeErrorMessage = (input) => {
  const parentElement = input.parentElement;
  const errorMsg = parentElement.querySelector('.error-msg');
  errorMsg.textContent = '';
};

/* Function that sends the email when the user submits the form
with using EmailJs service */
const sendEmail = () => {
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
};

// Function opens the contact modal window
function openModal() {
  let modal = document.querySelector('#contact-modal');
  modal.classList.toggle('show-modal');
}

closeButton.addEventListener('click', openModal);

/* Function submit contact form only if all inputs are complete correct,
then open modal, send email, reset form and makes contact form button disabled
 */
form.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  let isUsernameValid = checkUsernameField();
  let isUserEmailValid = checkUserEmail();
  let isMessageValid = checkUserMessage();
  let isFormValid = isUsernameValid && isUserEmailValid && isMessageValid;
  if (isFormValid) {
    openModal();
    sendEmail();
    form.reset();
    button.disabled = true;
  }
});

/* Disabled button becomes active when the user starts complete the form.
Add input event listener to all contact form inputs.
*/
document.querySelectorAll('.text-input').forEach((input) => {
  input.addEventListener('input', (e) => {
    e.preventDefault();
    let sendButton = document.querySelector('.send-btn');
    if (input.value === '') {
      sendButton.disabled = true;
    } else {
      sendButton.disabled = false;
    }
  });
});

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

// Submit the newsletter form only if email is valid
formNewsletter.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();
  let validEmail = checkNewsletterEmail();
  let isFormValid = validEmail;
  if (isFormValid) {
    // Pop up window from Sweet Alert 2 library
    Swal.fire({
      icon: 'success',
      title: 'Thank you for subscribe our newsletter!',
      showConfirmButton: false,
      timer: 3000,
    });
    formNewsletter.reset();
  }
});
