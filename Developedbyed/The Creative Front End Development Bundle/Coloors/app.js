const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelectorAll(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

sliders.forEach( slider => {
	slider.addEventListener("input", hslControls);
} );
colorDivs.forEach( (div, idx) => {
	div.addEventListener("change", () => {
		updateTxtUI(idx);
	} );
} );


function generateHex() {
	return chroma.random().hex();
	//return `#${Math.random().toString(16).substr(-6)}`;
};

function randomColors() {
	colorDivs.forEach( (div, idx) => {
		const hexTxt = div.children[0];
		const randomColor = generateHex();

		div.style.backgroundColor = randomColor;
		hexTxt.innerText = randomColor;

		checkTextConstrast(randomColor, hexTxt);

		const color = chroma(randomColor);//debugger;
		const sliders = div.querySelectorAll('.sliders input');
		const hue = sliders[0];
		const brightness = sliders[1];
		const saturation = sliders[2];

		colorizeSliders(color, hue, brightness, saturation);

	} );
}

function checkTextConstrast(color, txt) {
	const luminance = chroma(color).luminance()
	txt.style.color = luminance > 0.5 ? "black" : "white";
}

/*
function randomColors() {
	colorDivs.forEach( (div, idx) => {
		const hexTxt = div.children[0];
		const randomColor = generateHex();

		div.style.backgroundColor = randomColor;
		hexTxt.innerText = randomColor;


		const luminance = chroma(randomColor).luminance();
		if (luminance > 0.5) {
			checkTextConstrast(randomColor, hexTxt, "low")
		} else if (luminance <= 0.5) {
			checkTextConstrast(randomColor, hexTxt, "high")
		}
	} );
}

function checkTextConstrast(color, txt, type) {
	const randomColor = generateHex();

	if (type === "high") {
		txt.style.color = chroma(randomColor).luminance() > 0.5 ? randomColor : checkTextConstrast(color, txt, type);
	} else if (type === "low") {
		txt.style.color = chroma(randomColor).luminance() < 0.5 ? randomColor : checkTextConstrast(color, txt, type);
	}
}
*/

function colorizeSliders(color, hue, brightness, saturation) {
	const noSat = color.set("hsl.s", 0);
	const fullSat = color.set("hsl.s", 1);
	const scaleSat = chroma.scale([noSat, color, fullSat]);

	const midBright = color.set("hsl.l", 0.5);
	const scaleBright = chroma.scale(["black", midBright, "white"]);
	console.log(`linear-gradient(to right, ${scaleBright(0)}, ${scaleBright(1)})`);

	saturation.style.backgroundImage = `linear-gradient(to right, ${scaleSat(0)}, ${scaleSat(1)})`;
	brightness.style.backgroundImage = `linear-gradient(to right, ${scaleBright(0)}, ${scaleBright(0.5)}, ${scaleBright(1)})`;
	hue.style.backgroundImage = `linear-gradient(to right, 
	rgb(204, 75, 75), 
	rgb(204, 204, 75), 
	rgb(75, 204, 75),
	rgb(75, 204, 204), 
	rgb(75, 75, 204), 
	rgb(204, 75, 204), 
	rgb(204, 75, 75)`;

}

function hslControls(e) {
	const idx = e.target.getAttribute("data-bright") ||
				e.target.getAttribute("data-sat") ||
				e.target.getAttribute("data-hue");
	
	let sliders = e.target.parentElement.querySelectorAll("input[type='range']");

	const hue = sliders[0];
	const brightness = sliders[1];
	const saturation = sliders[2];

	const bgColor = colorDivs[idx].querySelector("h2").innerText;

	let color = chroma(bgColor)
	.set('hsl.s', saturation.value)
	.set('hsl.l', brightness.value)
	.set('hsl.h', hue.value);

	colorDivs[idx].style.backgroundColor = color;
}

function updateTxtUI(idx) {
	const activeDiv = colorDivs[idx];
	const color = chroma(activeDiv.style.backgroundColor);
	const txtHex = activeDiv.querySelector("h2");
	const icons = activeDiv.querySelectorAll(".control button");
	txtHex.innerText = color.hex();
}

randomColors();