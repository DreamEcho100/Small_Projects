let counterStart = 10;
let h1 = document.querySelector('h1');

const intervalId = window.setInterval(counter, 1000);

function counter() {
	h1.innerText = counterStart;
	counterStart--;
	if (counterStart < 0) {
		clearInterval(intervalId);
	}
}