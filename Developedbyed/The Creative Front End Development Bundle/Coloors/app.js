const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
const popup = document.querySelector(".copy-container");
const adjustBtns = document.querySelectorAll(".adjust");
const locktBtns = document.querySelectorAll(".lock");
const closeAdjustments = document.querySelectorAll(".close-adjustment");
const slidersContainers = document.querySelectorAll(".sliders")
let initialColors;

generateBtn.addEventListener("click", randomColors);
sliders.forEach( slider => {
	slider.addEventListener("input", hslControls);
} );
colorDivs.forEach( (div, idx) => {
	div.addEventListener("change", () => {
		updateTxtUI(idx);
	} );
} );
currentHexes.forEach( (hex) => {
	hex.addEventListener("click", () => {
		copyToClipboard(hex);
	} );
} );
popup.addEventListener("transitionend", () => {
	if (popup.classList.contains("active")) {
		const popupBox = popup.children[0];
		popup.classList.remove("active");
		popupBox.classList.remove("active");
	}
} );
locktBtns.forEach( (btn, idx) => {
	btn.addEventListener("click", (e) => {
		lockLayer(e, idx);
	} );
} );
/*
[adjustBtns, closeAdjustments].forEach( item => {
	item.forEach( (btn, idx) => {
		btn.addEventListener("click", () => {
			AdjustPanelStats(idx);
		} );
	} );
} );
*/
adjustBtns.forEach( (btn, idx) => {
	btn.addEventListener("click", () => {
		AdjustPanelStats(idx);
	} );
	closeAdjustments[idx].addEventListener("click", () => {
		AdjustPanelStats(idx);
	} );
} );


function generateHex() {
	return chroma.random().hex();
	//return `#${Math.random().toString(16).substr(-6)}`;
};

function randomColors() {
	initialColors = [];
	colorDivs.forEach( (div, idx) => {
		const hexTxt = div.children[0];
		let randomColor;

		if (div.classList.contains("locked")) {
			initialColors.push(hexTxt.innerText);
			return;
		} else {
			randomColor = generateHex();
			initialColors.push(chroma(randomColor).hex());
		}

		div.style.backgroundColor = randomColor;
		hexTxt.innerText = randomColor;

		//initialColors.push(hexTxt.innerText);

		checkTextConstrast(randomColor, hexTxt);

		const color = chroma(randomColor);
		const sliders = div.querySelectorAll('.sliders input');
		const hue = sliders[0];
		const brightness = sliders[1];
		const saturation = sliders[2];

		colorizeSliders(color, hue, brightness, saturation);

	} );
	
	resetInputs();

	adjustBtns.forEach( (btn, idx) => {
		checkTextConstrast(initialColors[idx], btn);
		checkTextConstrast(initialColors[idx], locktBtns[idx]);
	} );
}

function checkTextConstrast(color, txt) {
	const luminance = chroma(color).luminance()
	txt.style.color = luminance > 0.5 ? "black" : "white";
}

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

	const bgColor = initialColors[idx];

	let color = chroma(bgColor)
	.set('hsl.s', saturation.value)
	.set('hsl.l', brightness.value)
	.set('hsl.h', hue.value);

	colorDivs[idx].style.backgroundColor = color;

	colorizeSliders(color, hue, brightness, saturation);
}

function updateTxtUI(idx) {
	const activeDiv = colorDivs[idx];
	const color = chroma(activeDiv.style.backgroundColor);
	const txtHex = activeDiv.querySelector("h2");
	const icons = activeDiv.querySelectorAll(".control button");
	txtHex.innerText = color.hex();

	checkTextConstrast(color, txtHex);
	for (icon of icons) {
		checkTextConstrast(color, icon);
	}

	
	checkTextConstrast(color, adjustBtns[idx]);
	checkTextConstrast(color, currentHexes[idx]);
	checkTextConstrast(color, locktBtns[idx]);
}

function resetInputs() {
	const sliders = document.querySelectorAll(".sliders input");
	sliders.forEach( slider => {
		if (slider.parentElement.parentElement.classList.contains("locked")) {
			return;
		} else if (slider.name === 'hue') {
			const hueColor = initialColors[slider.getAttribute('data-hue')];
			const hueValue = chroma(hueColor).hsl()[0];
			slider.value = Math.floor(hueValue);//.toFixed(2);
		} else if (slider.name === 'brightness') {
			const brightColor = initialColors[slider.getAttribute('data-bright')];
			const brightValue = chroma(brightColor).hsl()[1];
			slider.value = brightValue.toFixed(2);
		} else if (slider.name === 'saturation') {
			const satColor = initialColors[slider.getAttribute('data-sat')];
			const satValue = chroma(satColor).hsl()[2];
			slider.value = satValue.toFixed(2);
		}
	} );
}

function copyToClipboard(hex) {
	const el = document.createElement("textarea");
	el.value = hex.innerText;
	document.body.appendChild(el);
	el.select();
	document.execCommand("copy");
	document.body.removeChild(el);

	const popupBox = popup.children[0];
	popup.classList.add("active");
	popupBox.classList.add("active");
	setTimeout(() => {
		if (popup.classList.contains("active")) {
			const popupBox = popup.children[0];
			popup.classList.remove("active");
			popupBox.classList.remove("active");
		}
	}, 550);
}

function AdjustPanelStats(idx) {
	slidersContainers[idx].classList.toggle("active");
}

function lockLayer(e, idx) {
	const lockSVG = e.target.children[0];
	const activeBg = colorDivs[idx];
	activeBg.classList.toggle("locked");

	if (lockSVG.classList.contains("fa-lock-open")) {
		e.target.innerHTML = "<i class='fas fa-lock'></i>";
	} else {
		e.target.innerHTML = "<i class='fas fa-lock-open'></i>";
	}
  
}

randomColors();