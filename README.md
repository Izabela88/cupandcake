<h1 align="center">CUP&CAKE</h1>

[View the live project here](https://izabela88.github.io/cupandcake/)

CUP&CAKE website is a landing page for a pastry shop that bakes cupcakes and sends them directly to customers' homes.
Customers can choose from three types of muffins: vegan, chocolate and fruity. Each type has six cupcakes to choose from.

Using UX design principles, this fully responsive and interactive website was developed using HTML, CSS, and JavaScript.

<h2 align="center"><img src="https://github.com/Izabela88/cupandcake/blob/development/media/responsive.png"></h2>

## **Table of content**

- [User Experience](#user-experience)
  - [User Stories](#user-stories)
  - [Design](#design)
- [Features](#features)
  - [Features Left To Implement](#features-left-to-implement)
- [Technologies Used](#technologies-used)
  - [Languages Used](#languages-used)
  - [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used)
- [Code Organisation](#code-organisation)
- [Data Validation](#data-validation)
- [Testing](#testing)
  - [Further Testing](#further-testing)
  - [Testing User Stories from User Experience Section](#testing-user-stories-from-user-experience-section)
- [Deployment](#deployment)
- [Bugs](#bugs)
- [Credits](#credits)
  - [Code](#code)
  - [Content](#content)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)

## User Experience

- ### User stories

  - #### First Time Visitor Goals

    - As a First Time Visitor:

      1. I want to easily understand the main purpose of the website and find out more information about the company.
      2. I want to be able to easily navigate throughout the site to find content.
      3. I want to look for the products section to understand what the company offers and products prices to find out if I can afford the products offered.
      4. I want to locate social media links to find opinions about the company and check how trusted and known they are.
      5. I want a responsive website, so I can access it on different devices.
      6. I want to find a section describing the company to find out when it was founded and the rest of the pertinent information about this company.

  - #### Returning Visitor Goals

    - As a Returning Visitor:

      1. I want to be able to add products to my shopping basket and place an order.
      2. I want to be able to remove products from the shopping basket.
      3. I want to be able to send an inquiry to the company in case of any doubts or larger orders.
      4. I want to know what size an order I can place.
      5. I want to know the total price of all products in the basket.
      6. I want to be able to add and subtract products.
      7. I want to know the contact details of the company.

  - #### Frequent User Goals

    - As a Frequent User:

      1. I want to check whether the company's opening hours have changed.
      2. I want to check if the contact details have changed.
      3. I want to sign up for the Newsletter to email any major updates and/or changes to the website or organisation.
      4. I want to be able to contact the company easily.

- ### Design

  The website is designed to be simple and orderly. All sections clearly present the information. The colours, texts and photos are selected in such a way as to arouse positive emotions among the users.

  - #### Colour Scheme

    <h2 align="center"><img src="https://github.com/Izabela88/cupandcake/blob/development/media/color-palette.png"></h2>

  - #### Typography

    - The Coiny and Montserrat fonts are used throughout the whole website with Sans Serif as the fallback font in the case for any reason the font isn't being imported into the site correctly. Both fonts are attractive and appropriate. The Coiny font is used for headings, and Montserrat is used for the rest of the text.

  - #### Imagery

    - Hero image is designed to catch the user's attention. It also has a modern, energetic aesthetic.
    - Product photos are large, clear and catch the user's attention.
    - The photos in the 'about me' and 'contact' section are very positive and are meant to inspire the trust of the users.

  - #### Wireframes

    - Home Page Wireframe (made in Adobe XD) - [View](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/project.jpg)
    - Mobile Wireframe (made in Adobe XD) - [View](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/mobile-design.png)

## Features

- #### Responsive on all device sizes

  ![Responsive](https://github.com/Izabela88/cupandcake/blob/development/media/responsive.png)

- #### Collapsible and interactive navbar

  - The website features a navigation menu on top of the page to allow users to easily navigate throughout the website.
  - The navigation is collapsible on mobile devices for better visibility.
  - The navbar closes automatically after scrolling to a section.

  ![Navigation](https://github.com/Izabela88/cupandcake/blob/development/media/navbar.png)
  ![Navigation](https://github.com/Izabela88/cupandcake/blob/development/media/mobile-menu.png)

- #### Interactive design

  - All interactive elements - including icons, links and buttons - feature hovering effects and all modals.

- #### Basket icon

  - Located in the upper right corner of the website.
  - The basket icon displays the current amount of products in the shopping basket.
  - When products are added or subtracted, the displayed number is updated.
  - After pressing, the shopping basket is open.

  ![Basket icon](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/basket.png)

- #### Shopping Basket

  - Shopping basket is easy to read and has a simple structure, which includes:

    - Product photo
    - Name of product
    - Price of the product
    - Minus button
    - Plus button
    - Quantity input
    - Total product price
    - Bin icon
    - Total price of all products in the basket
    - Total quantity of all products in the basket

  ![Full basket](https://github.com/Izabela88/cupandcake/blob/development/media/full-basket.png)

  - When the basket is empty, a funny gif animation is displayed with a text informing that the basket is empty.

  ![Empty basket](https://github.com/Izabela88/cupandcake/blob/development/media/empty-basket.png)

- #### Products section

  - The products are sorted into three groups and presented in tabs.
  - Cupcakes are displayed when the button tab is clicked by the user.
    Each product card contains a basket icon that adds the product to the basket when pressed.

  ![Products](https://github.com/Izabela88/cupandcake/blob/development/media/products2.png)

  - The section also describes the three types of cupcakes. When the user hovers the mouse over the image, the type description will appear.

  ![Types description](https://github.com/Izabela88/cupandcake/blob/development/media/types-description.png)

- #### Back to top button

  - When the page is scrolled down, the button appears in the lower right corner.
  - After pressing the button, the page automatically scrolls to the home page, and the button disappears.

  ![Back to top button](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/back-to-top-button.png)

- #### Send message information in the contact section

  - After completing the contact form, on the screen appears a message confirming that the message has been sent.

  ![Contact message](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/contact-message.png)

- #### Newsletter window

  - The newsletter window appears after pressing the 'subscribe' button in the footer.

  ![Newsletter window](https://github.com/Izabela88/cupandcake/blob/development/media/newsletter-window.png)

  - After clicking the 'submit' button appears a window with thanks for subscribing to the newsletter which disappears by itself after 3 seconds.

  ![Newsletter alert](https://github.com/Izabela88/cupandcake/blob/development/media/newsletter-info.png)

- #### Checkout

  - In this case, I present a checkout simulation without sending data because the site has no backend.
  - After pressing the 'purchase' button in the shopping basket, the following appears:

    - Asking if the user really wants to continue the purchase.
      ![Warning alert](https://github.com/Izabela88/cupandcake/blob/development/media/warning-info.png)
    - Then, if yes, the user must enter an email address.
      ![Email alert](https://github.com/Izabela88/cupandcake/blob/development/media/checkout-email.png)
    - Then, if yes, the user must enter his/her full name.
      ![Full name alert](https://github.com/Izabela88/cupandcake/blob/development/media/checkout-name.png)
    - Then, if yes, the user must enter his/her full address.
      ![Full address alert](https://github.com/Izabela88/cupandcake/blob/development/media/checkout-address.png)

  - After pressing the 'order' button, the final information appears with thanks for the purchase.
    ![Final alert](https://github.com/Izabela88/cupandcake/blob/development/media/checkout-last-msg.png)
  - The user can cancel the process at any time.

- #### Toast

  - During adding products to the basket, on the top of the website appears the information that the item has been added to the basket.

    ![Toast](https://github.com/Izabela88/cupandcake/blob/development/media/toast.png)

- #### Add to basket icon

  - It is located in the lower right corner of each product card.
  - It allows the user to add products to the shopping basket.

  ![Add basket icon](https://github.com/Izabela88/cupandcake/blob/development/media/add-to-basket-icon.png)

### Features Left To Implement

- Fully working checkout form with payment:
  - The website has no backend and is not connected to the server
- Sign up page
- Login page
- My profile page
- Fully working Newsletter:
  - The website has no backend and is not connected to the server
- Connecting the application to the database:
  - Currently, products data are being fetched from a local file 'products.txt'
  - Currently, basket data is stored in Local Storage

## Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries and Programs Used

1. [Google Fonts:](https://fonts.google.com/)
   - Google fonts were used to import the 'Coiny' and 'Montserrat' fonts into the style.css file which is used on all pages throughout the project.
1. [Local Storage:](https://blog.logrocket.com/localstorage-javascript-complete-guide/)
   - Local Storage was used as a replacement for the database to store data used during shopping basket operations.
1. [Visual Studio Code:](https://code.visualstudio.com/)
   - Visual Studio Code was used to create and store code.
1. [Font Awesome:](https://fontawesome.com/)
   - Font Awesome was used on all pages throughout the website to add icons for aesthetic and UX purposes.
1. [GitHub:](https://github.com/)
   - GitHub is used to store the code of the project.
1. [Crello:](https://crello.com/home/)
   - Crello was used to create the logo.
1. [Adobe XD:](https://www.adobe.com/uk/products/xd.html?sdid=88X75SKR&mv=search&ef_id=CjwKCAjwyIKJBhBPEiwAu7zll6Ys4g-qsJjAUTP4bv4knPHl3mYJ2_1kehg62kedd_HEr9PeaVgVaxoC874QAvD_BwE:G:s&s_kwcid=AL!3085!3!529101237971!e!!g!!adobe%20xd!1642716928!71269819668)
   - Adobe XD was used to create the website design for desktop and mobile devices.
1. [Favicon.io:](https://favicon.io/favicon-converter/)
   - Favicon.io was used to create a favicon.
1. [Pixlr:](https://pixlr.com/pl/e/)
   - Pixlr.com was used to process photos used in the whole website.
1. [Haikei:](https://app.haikei.app/)
   - Haikei was used to create SVG background shape in the hero section.
1. [Sweetalert2:](https://sweetalert2.github.io/#download)
   - Sweetalert was used for popup windows for checkout, newsletter finish message, 'added to basket' toast and warning alerts which show up when the user tries to add too many products to the basket.
1. [Animista:](https://animista.net/play/entrances/scale-in)
   - Animista was used for shopping basket icons animation.
1. [EmailJS:](https://www.emailjs.com/)
   - EmailJS was used for the contact form to send emails directly from JavaScript, without server code.

## Code Organisation

As the code grew, the developer decided to split all JavaScript code for parts:

- navbar.js: contains code that is responsible for the operation and animations of the navigation bar
- products.js: handles the rendering of the product cards, append items to local storage memory, and the process of adding products to the shopping basket
- contact.js: handles validation functionalities of the contact form
- basket.js: handles functions of the operation in the shopping basket
- products.txt: contains products data

## Data Validation

### Validating Contact Form

Some text input fields will have a regex pattern to ensure that the entered data matches the required format.

- Warnings are displayed on an ongoing basis while the user completes the form.

  - Full name: no empty input is allowed, valid data between 2 and 25 characters, no special characters and spaces are accepted, no digits.
  - Email: no empty input is allowed, valid data between 2 and 150 characters, the universal regex pattern was used to validate the e-mail, no spaces.
  - Message: no empty input is allowed, valid data between 2 and 300 characters.
  - 'SEND' Button:
    - The button is disabled by default to prevent sending an empty message.
    - The button becomes active when the user starts to complete the form.

### Validating The Order

- An order may contain a minimum of 5 cupcakes.
- An order may contain a maximum of 20 cupcakes of one type.

  - When adding cupcakes from the home page, an alert appears on the screen when the number exceeds 20 cupcakes of one type.
  - The same alert appears when the user adds cupcakes to order in a shopping basket.

  ![Alert](https://github.com/Izabela88/cupandcake/blob/development/media/info.png)

  - Another alert appears when an order does not reach a minimum of five cupcakes.

  ![Alert](https://github.com/Izabela88/cupandcake/blob/development/media/qty-alert.png)

- Purchase button is disabled by default.
- The button becomes active when cupcakes are added to the shopping basket.

  ![Purchase Button](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/purchase-button.png)

- Minus button becomes disabled when product quantity drops to 1, which makes it impossible to reach zero amount.

  ![Disabled minus button](https://github.com/Izabela88/cupandcake/blob/feature-readme/media/disabled-minus-button.png)

### Validating The Newsletter Form

- Warnings are displayed under input.
- Email input: no empty input is allowed, valid data between 2 and 150 characters, the universal regex pattern was used to validate the e-mail, no spaces.

## Testing

The W3C Markup Validator and W3C CSS Validator Services, and JSHint were used to validate every page of the project to ensure there were no syntax errors in the project.

- [W3C Markup Validator](https://validator.w3.org/) - [Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fizabela88.github.io%2Fcupandcake%2F)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) - [Results](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fizabela88.github.io%2Fcupandcake%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pl-PL)
- [JSHint](https://jshint.com/)

- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through Lighthouse in Chrome extension.

  - Accessibility for desktop
    ![Accessibility](https://github.com/Izabela88/cupandcake/blob/development/media/lighthouse-desktop.png)

  - Accessibility for mobiles
    ![Accessibility](https://github.com/Izabela88/cupandcake/blob/development/media/lighthouse-mobile.png)

### Further Testing

- The Website was tested on Google Chrome, Mozilla Firefox, Opera and Safari browsers.
- The Safari browser doesn't support 'smooth' behavior parameter in window.scroll() method.
- The website was viewed on a variety of devices such as Desktop, Laptop (Macbook Pro 16 inch), Mobiles( Huawei P20 Mate, Huawei P30, Samsung S21 ultra).
- A large amount of testing was done to ensure that all pages were linking correctly.
- Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Testing User Stories from User Experience Section

- #### First Time Visitor Goals

  1. I want to easily understand the main purpose of the website and find out more information about the company.

     - Featured at the top of the page company logo.
     - The hero section contains a slogan that indicates what the company does.
     - The Hero section contains images that are related to the activities of the company.
     - The hero section contains two buttons that can direct the user directly to the 'about us' section or the 'products section' where the user will find more information about the company and all products.

     ![Hero](https://github.com/Izabela88/cupandcake/blob/development/media/hero.png)

  2. I want to be able to easily navigate throughout the site to find content.

     - The navigation links are in the centre of the navbar: Home, Products, About, and Contact, which link to the sections of the same page.
     - The navigation clearly tells the user the name of the company and makes easy to find all information on the website.
     - In the footer, the user can find a 'quick links' list, which leads to sections of the website, which also helps in the smooth navigation of the website.
     - When the user starts scrolling down, on the right side appears the 'back to top button', which, when pressed, leads to the home page

     ![Navbar](https://github.com/Izabela88/cupandcake/blob/development/media/navbar.png)

  3. I want to look for the products section to understand what the company offers and products prices to find out if I can afford the products offered.

     - In the 'Products' section, the users can find all information about the products offered by the company.
     - The 'Products' section was created to inform the user about the prices and types of the offered products.

     ![Products](https://github.com/Izabela88/cupandcake/blob/development/media/products1.png)
     ![Products](https://github.com/Izabela88/cupandcake/blob/development/media/products2.png)

  4. I want to locate social media links to find opinions about the company and check how trusted and known they are.

     - In the navbar and the footer, the user can find social media icons that links to the company social media websites

  5. I want a responsive website, so I can access it on different devices.

     - The website resizes according to the device used for better visibility and user experience.

  6. I want to find a section describing the company to find out when it was founded and the rest of the pertinent information about this company.

     - The 'About' section provides information about the company, when it was founded and what it does.

     ![About](https://github.com/Izabela88/cupandcake/blob/development/media/about.png)

- #### Returning Visitor Goals

  1. I want to be able to add products to my shopping basket and place an order.

     - Each product card contains a shopping basket icon.
     - After pressing the icon, the selected product is added to the shopping basket.
     - Inside the basket is a purchase button which, after pressing, allows the user to place the order.

  2. I want to be able to remove products from the shopping basket.

     - Inside the basket, next to each product, is a bin icon that allows user to remove the product from the basket.

  3. I want to be able to send an inquiry to the company in case of any doubts or larger orders.

     - In the contact section is a form that allows the user to send a message to the company.

     ![Contact](https://github.com/Izabela88/cupandcake/blob/development/media/contact.png)

  4. I want to know what size an order I can place.

     - On the main page of the 'Products' section, the user can find information about the minimum order quantity.
       When the user adds products after reaching the number 20, the information about the maximum number of cupcakes of one type appears on the screen.

  5. I want to know the total price of all products in the basket.

     - Inside the shopping basket there is information about the total amount to be paid.

  6. I want to be able to add and subtract products.

     - Inside the shopping basket are a subtraction icon and an additional icon that allow the user to add and subtract products.

  ![Basket](https://github.com/Izabela88/cupandcake/blob/development/media/full-basket.png)

  7. I want to know the contact details of the company.

     - The footer contains all the information the user needs to know to contact the company.

     ![Footer](https://github.com/Izabela88/cupandcake/blob/development/media/footer.png)

- #### Frequent User Goals

  1. I want to check whether the company's opening hours have changed.

     - The user can check the current opening hours of the hotel on Facebook or on the webpage in the footer.

  2. I want to check if the contact details have changed.

     - The user would already be comfortable with the website layout and can easily find information in the footer.

  3. I want to sign up for the Newsletter to email any major updates and/or changes to the website or organisation.

     - To the left-hand side of the footer, the user can see "Subscribe to our Newsletter" and the button Subscribe.

     ![Newsletter button](https://github.com/Izabela88/cupandcake/blob/development/media/newsletter-btn.png)

     - After pressing the button, the newsletter window opens, and the users can join to subscribers list to get the latest news and special offers.

     ![Newsletter window](https://github.com/Izabela88/cupandcake/blob/development/media/newsletter-window.png)

  4. I want to be able to contact the company easily.
     - This is possible thanks to the contact form in the contact section.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Izabela88/cupandcake)
2. At the top of the Repository (not the top of the page), locate the "Settings" button on the menu.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Main Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://izabela88.github.io/cupandcake/) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Izabela88/cupandcake)
2. At the top of the Repository (not top of page), just above the "Settings" button on the menu, locate the "Fork" button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Izabela88/cupandcake)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Bugs

1. This error appears in the console when launching a website in the Chrome browser in the Incognito window, and it does not appear otherwise:
   ![Bug](https://github.com/Izabela88/cupandcake/blob/development/media/console-bug.jpg)

- Debugging process:
  - Basket in Local Storage was initiated only when the first item was added to the basket.
  - This was causing issues with the JSON parsing statements because Basket (when the application started) was undefined.
- Solution:
  - Initiate Basket in Local Storage as an empty array only if Basket doesn't exist.

2. In console appears this warning (only in the Incognito mode) :

- "Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'."

3. I got error while creating the Lighthouse report for mobile devices:
   ![Lighthouse bug](https://github.com/Izabela88/cupandcake/blob/development/media/lighthouse-error.jpg)

- Debugging process:
  - Searching for information about the error.
  - Installing an additional Chrome extension: Axe Accessibility.
  - Doing a re-report in Incognito mode.
  - Several attempts to change the style in the CSS file.
- Solution:
  - After removing links to social media located in the navbar, the problem was solved.

## Credits

### Code

While coding for some problems and inspirations with JavaScript code, I looked for answers on websites:

- [W3School](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [JavaScript Tutorial](https://www.javascripttutorial.net/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [Sabe Io](https://sabe.io/)

### Content

- All content was written by the developer.

### Media

- The images was taken from [Pixlr](https://pixlr.com/e/),[Unsplash](https://unsplash.com/), [Pixabay](https://pixabay.com/).
- The icons was taken from: [Vecteezy](https://www.vecteezy.com/), [Flaticon](https://www.flaticon.com/),
  [Iconmonstr](https://iconmonstr.com/twitter-5-png/), [Giphy](https://giphy.com/gifs/buzzfeedanimation-cupcake-cuppy-the-good-advice-LwIRDtAxK0t2o4p2IS)

### Acknowledgements

- My Mentor for continuous helpful feedback.
