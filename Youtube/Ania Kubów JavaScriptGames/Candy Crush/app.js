document.addEventListener("DOMContentLoaded", () => {
	const grid = document.querySelector(".grid");
	const width = 8;
	const squares = [];

	const candyColors = ["red", "yellow", "orange", "purple", "green", "blue"];

	// Create Board
	function createBoard() {
		for (let i = 0; i < width * width; i++) {
			const square = document.createElement("div");
			square.setAttribute("draggable", "true");
			square.setAttribute("id", i);
			let randomNum = Math.floor(Math.random() * candyColors.length);
			square.style.background = candyColors[randomNum];
			grid.appendChild(square);
			squares.push(square);
		}
	}

	createBoard();

	// Drag the candies
	squares.forEach((square) =>
		square.addEventListener("dragstart", dragStart)
	);
	squares.forEach((square) => square.addEventListener("dragover", dragOver));
	squares.forEach((square) =>
		square.addEventListener("dragenter", dragEnter)
	);
	squares.forEach((square) =>
		square.addEventListener("dragleave", dragLeave)
	);
	squares.forEach((square) => square.addEventListener("drop", dragDrop));
	squares.forEach((square) => square.addEventListener("dragend", dragEnd));

	let colorBeingDragged,
		colorBeingReplaced,
		squareIdBeingDragged,
		squareIdBeingReplaced
		/*replaceSquares*/;

	function dragStart() {
		colorBeingDragged = this.style.backgroundColor;
		squareIdBeingDragged = parseInt(this.id);
		console.log(this.id, "dragStart", colorBeingDragged);
	}

	function dragOver(e) {
		e.preventDefault();
		console.log(this.id, "dragOver");
	}

	function dragEnter(e) {
		e.preventDefault();
		console.log(this.id, "dragEnter");
	}

	function dragLeave() {
		console.log(this.id, "dragLeave");
	}

	function dragDrop() {
		console.log(this.id, "dragDrop");
		squareIdBeingReplaced = parseInt(this.id);
		colorBeingReplaced = this.style.backgroundColor;
		this.style.backgroundColor = colorBeingDragged;
		squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
		/*
		setTimeout((replaceSquares) => {
			if (replaceSquares) {
				this.style.backgroundColor = colorBeingDragged;
				squares[squareIdBeingDragged].style.backgroundColor = colorBeingReplaced;
			}
		}, 100, replaceSquares)
		*/
	}

	function dragEnd() {
		console.log(this.id, "dragEnd");

		let validMoves = [
			squareIdBeingDragged - 1,
			squareIdBeingDragged - width,
			squareIdBeingDragged + 1,
			squareIdBeingDragged + width
		];

		let validMove = validMoves.includes(squareIdBeingReplaced);
		console.log(validMove);

		if (squareIdBeingReplaced && validMove) {
			squareIdBeingReplaced = null;
		} else if (squareIdBeingReplaced && !validMove) {
			squares[squareIdBeingReplaced].style.backgroundColor = colorBeingReplaced;
			squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
		} else {
			squares[squareIdBeingDragged].style.backgroundColor = colorBeingDragged;
		}
	}









});
