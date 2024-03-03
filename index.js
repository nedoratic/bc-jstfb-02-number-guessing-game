// DOM elements
const appInput = document.querySelector('.app__input__field').value;
const appButton = document.querySelector('.app__input__button');
const appOutput = document.querySelector('.app__output');

// Game variables
const minNum = 1;
const maxNum = 100;

let answer;
let guess;

let running = true;

const generateRandomNumber = () => {
	Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};
