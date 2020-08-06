const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;


function generateHex() {
	return `#${Math.random().toString(16).substr(-6)}`;
}

let randomHex = generateHex();

function randomColors() {
	// body...
}