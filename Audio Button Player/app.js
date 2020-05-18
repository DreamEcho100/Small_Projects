const animals = document.querySelectorAll(".animalSounds-btn");
const body = document.querySelector("body");

for (let i = 0; i < animals.length; i++) {
	let elem = animals[i];
	elem.addEventListener("click", function() {
		let animal = this.innerHTML.toLowerCase();
		makeSound(animal);
	})
}

body.addEventListener("keydown", function(event) {
	if (event.keyCode === 76 || event.keyCode === 68 || event.keyCode === 67) {
		let animal = event.keyCode;
		makeSound(animal);
	}	
})
function makeSound(name) {
		console.log(name);
		switch(name) {
			//
			case "lion":
			let sound1 = new Audio("sounds/lion.mp3");
			sound1.play();
			break;
			case 76:
			let sound1Copy = new Audio("sounds/lion.mp3");
			sound1Copy.play();
			break;
			//
			case "cougar":
			let sound2 = new Audio("sounds/cougar.mp3");
			sound2.play();
			break;
			case 67:
			let sound2Copy = new Audio("sounds/cougar.mp3");
			sound2Copy.play();
			break;
			//
			case "dog":
			let sound3 = new Audio("sounds/dog.mp3");
			sound3.play();
			break;
			case 68:
			let sound3Copy = new Audio("sounds/dog.mp3");
			sound3Copy.play();
			break;
			//
		}
}
/*
const barkBTN = document.getElementById("bark-btn");
const bark = new Audio("sounds/bark.mp3");

barkBTN.addEventListener("click", () => {
	let duration = bark.duration;
	let muted = bark.muted;
	bark.play();
	console.log(duration);
	console.log(muted);
})
*/