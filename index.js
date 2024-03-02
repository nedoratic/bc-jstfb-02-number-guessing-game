// DOM elements
const appInput = document.querySelector('.app__input__field');
const appButton = document.querySelector('.app__input__button');
const appOutput = document.querySelector('.app__output');

// Game variables
const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
