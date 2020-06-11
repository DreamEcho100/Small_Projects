const output = document.querySelector(".output");
const txt = document.querySelector("textarea");
/*
txt.addEventListener("change",textCounter);
txt.addEventListener("keyup",textCounter);
txt.addEventListener("keydown",textCounter);
*/
["keyup", "keydown", "change"].forEach(function (e) {
	txt.addEventListener(e, textCounter);
})


const maxLength = 20;
const warnLength = 15;

function textCounter(e) {
	let counter = txt.value.length;
	if (counter > maxLength) {
		txt.value = txt.value.substring(0, maxLength);
	}
	switch(counter) {
		case 1:
			output.style.color = "blue";
			break;
		case Math.floor(maxLength / 4):
			output.style.color = "green";
			break;
		case Math.floor(maxLength / 2):
			output.style.color = "yellow";
			break;
		case Math.floor(maxLength / 1.25):
			output.style.color = "red";
			break;
	}
	(counter >= maxLength) ? output.innerHTML = `There is no characters left.` : output.innerHTML = `${maxLength - counter} characters left.`;
}
