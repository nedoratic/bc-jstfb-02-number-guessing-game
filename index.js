// DOM elements
const appInput = document.querySelector('.app__input__field');
const appButton = document.querySelector('.app__input__button');
const appOutput = document.querySelector('.app__output');

// Game variables
const minNum = 1;
const maxNum = 100;

let answer;
let attempts = 0;

// Generate random number
const generateRandomNumber = () => {
	return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
};

// Validate guess
const validateGuess = (guess) => {
	if (isNaN(guess)) {
		return 'Please enter a valid number.';
	} else if (guess < minNum || guess > maxNum) {
		return 'Please enter a number between 1 and 100.';
	}
	return null; // Indicates no validation errors
};

// Compare guess to answer
const compareGuessToAnswer = (guess) => {
	attempts++;
	if (guess < answer) {
		return `${guess} is too low. Try again.`;
	} else if (guess > answer) {
		return `${guess} is too high. Try again.`;
	} else {
		return `Congratulations! The answer was ${answer}. You guessed the number in ${attempts} attempts. Refresh the page to play again.`;
	}
};

// Handle guess
const handleGuess = () => {
	const guess = Number(appInput.value);
	const validationError = validateGuess(guess);

	if (validationError) {
		appOutput.textContent = validationError;
	} else {
		const resultMessage = compareGuessToAnswer(guess);
		appOutput.textContent = resultMessage;
		if (resultMessage.includes('Congratulations')) {
			appButton.disabled = true; // Disable the button after correct guess
		}
	}
};

// Event listener for button click
appButton.addEventListener('click', handleGuess);

// Event listener for pressing Enter key
appInput.addEventListener('keypress', (event) => {
	if (event.key === 'Enter') {
		handleGuess();
	}
});

// Initialize the game
answer = generateRandomNumber();
