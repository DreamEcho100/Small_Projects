const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

let play = {
	speed: (player.offsetWidth / 2), 
	ready: true
}

let keys = ["keydown", "keyhold"];
catchCoin(player, coin);

keys.forEach((item) => {
    document.addEventListener(item, function (e) {
	    if (play.ready) {
	    	switch(e.key) {
				case "ArrowUp":
					player.style.top = `${(player.offsetTop) - play.speed}px`;
					break;
				case "ArrowDown":
					player.style.top = `${(player.offsetTop) + play.speed}px`;
					break;
				case "ArrowLeft":
					player.style.left = `${(player.offsetLeft) - play.speed}px`;
					player.style.transform = "scale(-1, 1)";
					break;
				case "ArrowRight":
					player.style.left = `${(player.offsetLeft) + play.speed}px`;
					player.style.transform = "scale(1, 1)";
					break;
			}
			player.ready = false;
			setTimeout(() => {player.ready = true}, 500);
	    }
    	catchCoin(player, coin);
    });
})

function catchCoin(a, b) {
	if (isCollide(a, b)) {
		console.log(true);
		b.style.left = `${Math.floor(Math.random() * window.innerWidth - (window.innerWidth * 0.1))}px`;
		b.style.top = `${Math.floor(Math.random() * window.innerHeight - (window.innerHeight * 0.1))}px`;
		if (isCollide(a, b)) {
			catchCoin(a, b)
		}
		if (b.offsetLeft < 0) {
			//Number(b.style.left.substr(0, b.style.left.length - 2)) < 0
			let temp = Math.abs(b.offsetLeft);
			b.style.left = `${temp}px`;
		}
		if (b.offsetTop < 0) {
			//Number(b.style.top.substr(0, b.style.top.length - 2))
			let temp = Math.abs(b.offsetTop);
			b.style.top = `${temp}px`;
		}
	}
}

















































function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}


function isCollide(a, b) {
    let aRect = a.getBoundingClientRect();
    let bRect = b.getBoundingClientRect();
    return !(
        (aRect.bottom < bRect.top) ||
         (aRect.top > bRect.bottom) ||
          (aRect.right < bRect.left) ||
           (aRect.left > bRect.right)
    );
}