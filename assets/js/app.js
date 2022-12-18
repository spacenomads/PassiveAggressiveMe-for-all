'use strict';

const paText = document.querySelector('.js__pa-text');
const paButton = document.querySelector('.js__pa-this');


function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomCase(char) {
	const format = [0, 0, 1];
	const MIN = 0;
	const random = getRandomNumber(MIN, format.length);
	return format[random] === 0 ? char.toLowerCase() : char.toUpperCase();
}

function passiveAggressiveMe(str) {
	return str
		.split('')
		.map(randomCase)
		.join('');
}

function toTheClipboard(text) {
	navigator.clipboard
		.writeText(text)
		.then(
		() => {
			console.log('OK');
		},
		() => {
			console.log('KO');
		}
	);

}

function convertAndCopy() {
  const paResult = passiveAggressiveMe(paText.value);
  paText.value = paResult;
  toTheClipboard(paResult);
}

paButton.addEventListener('click', convertAndCopy)