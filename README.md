# Frontend Mentor - Invoice app solution

This is a solution to the [Invoice app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)



## Overview

### The challenge

  Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, read, update, and delete invoices
- Receive form validations when trying to create/edit an invoice
- Save draft invoices, and mark pending invoices as paid
- Filter invoices by status (draft/pending/paid)
- Toggle light and dark mode
- **Bonus**: Keep track of any changes, even after refreshing the browser (`localStorage` could be used for this if you're not building out a full-stack app)


### Links

- Solution URL: [Solution URL](https://github.com/Aycom366/Invoices/)
- Live Site URL: [Live Site](https://invoices-beta.vercel.app/)

- HTML5
- vanilla CSS
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- Redux for state management
- Formik to handle Forms Data

### What I learned
Firstly this projects really taught me so many things i wouldnt even know if i haven't decided to do this project. I learnt about the formik libraries and also how efficient i can use it to manage my form states. Most times, I used the React-Hooks-Form to manage my form state becuase it is similar to Formik handling of state. But when the need of creating dynamic inputs comes in, I realized I need to find a better Library to handle my formstate and that when the idea of using Formik comes in. Including Redux. This is my first time i will be using Redux for state management. Most time I use the useContext API introudced in React 16.8 to handle form data.

Secondly, I regret not checking this project well before I started. actually, It not that I didn't plan, I did but I didn't see some things not until I began to check the mobile View and I noticed am supposed to have some containers fixed. Eeeuuwww, After seeing this I got frustrated that I will be to lazy to Refactore because have gone a lot on the Project. That is Why, You might decided to start looking for one button of which I dint put in the same component but some were else entirely lol. Most of the Button are in App.js Including the Delete overlay and it children. The children of Delete Overlay is in the Delete Overlay Component.

## Author

- Website - [My Website](https://temitayo-portfolio-website.netlify.app/)
- Frontend Mentor - [@Aycom366](https://www.frontendmentor.io/profile/Aycom366)
- Twitter - [@Bamigboyeayomi5](https://www.twitter.com/bamigboyeayomi5)
- LinkedIn - [LinkedIn Profile](https://www.linkedin.com/in/ayomide-bamigboye-a477b4171/)

