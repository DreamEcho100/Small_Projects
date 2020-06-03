const playArea = {};
const player = {};
let gameObj;
let gameScores = [250, 200, 150, 100, 50, 25, 10, 5, -250, -200, -150, -100, -50, -25, -10, -5]

player.score = 0;
player.items = 3;

playArea.stats = document.querySelector(".stats");
playArea.main = document.querySelector(".main");
playArea.game = document.querySelector(".game");
playArea.btns = Array.from(document.querySelectorAll(".btn"));
playArea.page = Array.from(document.querySelectorAll(".page"));

console.log(playArea);

console.log(player);

document.addEventListener("DOMContentLoaded", getData);

playArea.btns.forEach(function(item) {
	item.addEventListener("click", handleBtn);
});

function getData() {
	

	playArea.main.classList.add("visible"); 
	/*fetch(`https://api.adorable.io/avatars/83/${word}@adorable.io.png`)
	.then(function(rep){
		console.log(rep.json());
        return rep.json();
    }).then(function(data){
        gameObj = data.data;
        console.log(gameObj);
	buildBoard();
    })*/
	if (!localStorage.getItem("faces")) {
		let chars = ["f", "u", "c", "k"];
		let faces = [];
		for (let i = 0; i < 16; i++) {
			let word = "";
			for (let j = 0; j < chars.length; j++) {
				let randomChar = Math.floor(Math.random() * chars.length);
				word += chars[randomChar];
			}
			let url = `https://api.adorable.io/avatars/55/${word}@adorable.io.png`
			faces.push(url);
		}
		localStorage.setItem("faces" ,faces)
	}
	let test = localStorage.getItem("faces");
	test = test.split(",");
	gameObj = test;
	buildBoard();
}

function handleBtn(e) {
	console.log(e.target.classList.contains("newGame"));
	if (e.target.classList.contains("newGame")) {
		console.log("start");
		startGame();
	}
}

function startGame() {
	console.log(player);
	playArea.main.classList.remove("visible");
	playArea.game.classList.add("visible");
	console.log("Start");
	player.gameOver = false;
	let gc = document.querySelectorAll(".pop");
	for (let i = 0; i < gc.length; i++) {
	    gc[i].addEventListener("click", function() {
	    	player.score = player.score + gc[i].v;
	    	gc[i].v = 0;
	        gc[i].innerHTML = gc[i].cnt;
	        gc[i].classList.remove("active");
	        gc[i].removeEventListener("click", hitPop);
	        if(player.score < 0) {
			    player.items = Number(player.items) - 1;
			    player.score = 0;
			}
			if (player.items < 0) {
				gameOver();
			}
	    	updateScore();
	    })
	    gc[i].v = 0;
	    gc[i].innerHTML = gc[i].cnt;
	    gc[i].classList.remove("active");
	    gc[i].removeEventListener("click", hitPop);
	    console.log("work")
	}
	startPop();
    updateScore();
}

function cheker() {
	if (player.score < 0) {
		player.items = player.items--;
		updateScore();
	}
	if (player.items < 0) {
		gameOver();
	}
	updateScore();

}
//cheker();
/*
	let gc = document.querySelectorAll(".pop");
	for (let i = 0; i < gc.length; i++) {
	    gc[i].addEventListener("click", function() {
	        gc[i].innerHTML = gc[i].cnt;
	        gc[i].classList.remove("active");
			gc[i].removeEventListener("click", hitPop);
		})
		console.log("work")
		clearTimeout(playArea.inPlay);
		if (!player.gameOver) {
		    startPop();
		}
	}*/


function randomUp() {
	const pops = document.querySelectorAll(".pop");
	const idx = Math.floor(Math.random() * pops.length);
	if (pops[idx].cnt === playArea.last) {
		return randomUp();
	}
	playArea.last = pops[idx].cnt;
	return pops[idx];
}

function startPop() {
	let newPop = randomUp();
	console.log(newPop);
	newPop.classList.add("active");
    console.log(newPop.old)
	newPop.addEventListener("click", hitPop);
	const time = Math.round(Math.random() * (1500) + 750);
	const val = Math.floor(Math.random() * gameObj.length);
	newPop.old = newPop.innerText;
	let score = gameScores[val]
	newPop.v = score;
	newPop.innerHTML = `<img class="img" src="${gameObj[val]}"> <br> ${score}`;
	playArea.inPlay = setTimeout(function () {
        newPop.classList.remove("active");
        newPop.removeEventListener("click", hitPop);
        newPop.innerText = newPop.cnt;
        if (!player.gameOver) {
            startPop();
        }
    }, time);
}

function startPop() {
    let newPop = randomUp();
    console.log(newPop);
    newPop.classList.add("active");
    newPop.addEventListener("click", hitPop);
    const time = Math.round(Math.random() * (250) + 500);
    const val = Math.floor(Math.random() * gameObj.length);
    newPop.old = newPop.innerText;
	let score = gameScores[val]
	
	
    newPop.v = score;
    newPop.innerHTML = `<img class="img" src="${gameObj[val]}"> <br> ${score}`;
    playArea.inPlay = setTimeout(function () {
        newPop.classList.remove("active");
        newPop.removeEventListener("click", hitPop);
        newPop.innerText = newPop.old;
        if (!player.gameOver) {
            startPop();
        }
    }, time);
}

function gameOver() {
    player.gameOver = true;
    playArea.main.classList.add("visible");
    playArea.game.classList.remove("visible");
    document.querySelector(".newGame").innerText = "Try Again";
    player.score = 0;
	player.items = 3;
    //document.querySelector(".board").innerText = "Try Again";
}

function hitPop(e) {
	let newPop = e.target;
	updateScore();
}


function updateScore() {
    playArea.scorer.innerHTML = `<span class="board">Score: ${player.score} Lives: ${player.items}</span>`;
}

function buildBoard() {
	playArea.scorer = document.createElement("span");
    playArea.scorer.innerHTML = "Press Button to Start";
    playArea.stats.appendChild(playArea.scorer);
	console.log("ready");
	let rows = 4;
	let cols = 4;
	let cnt = 0;
	playArea.game.style.width = cols * 100// + (cols * 2);
	playArea.game.style.margin = "auto";
	for (let i = 0; i < rows; i++) {
		let divMain = document.createElement("div");
		divMain.setAttribute("class", "row");
		divMain.style.width = cols * 100 //+ (cols * 2);
		for (let j = 0; j < cols; j++) {
			let div = document.createElement("div");
			div.setAttribute("class", "pop");
			cnt++;
			div.innerText = cnt;
			div.cnt = cnt;
			div.classList.add("gameCell");
			console.log(div.cnt);
			divMain.appendChild(div);
		}
		divMain.classList.add("gameCell");
		divMain.style.width = "fit-content";
		playArea.game.appendChild(divMain);
	}
}