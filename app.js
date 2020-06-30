/*
const section = document.querySelectorAll("section");

let modelObj = {};
init(modelObj);
let randomTime = randomNum(100, 100);
let maxDeg = 720;
let minDeg = -720;

const range = (function (max, min) {
	if (minDeg < 0) {
		return Math.floor(maxDeg + Math.abs(minDeg)) * 2;
	}
	if (minDeg >= 0) {
		return Math.floor(maxDeg - Math.abs(minDeg)) * 2;
	}	
})(maxDeg, minDeg)

let collectionObj = {
	currentIdx: 0,
	continue1: true,
	continue2Negatively: true,
	collection: []
}

section.forEach((item) => {
	//init(item);
	item.color1 = modelObj.color1;
	item.color2 = modelObj.color2;
	item.color3 = modelObj.color3;
	item.deg = modelObj.deg;
	
	changeBGColor(item, randomTime, collectionObj);
})

function changeBGColor(item, time, objCollector) {
	setInterval(function() {
		if (objCollector.continue1) {
			let valColor1 = action("rgbColor", item.color1, randomNum(1, 0), 0, 256);
			let valColor2 = action("rgbColor", item.color2, randomNum(10, 0), 0, 256);
			let valColor3 = action("rgbColor", item.color3, randomNum(1, 0), 0, 256);
			let valDeg = action("deg", item.deg, randomNum(5, 1), minDeg, maxDeg);
			randomTime = randomNum(25, 50);

			objCollector.collection.push({
				id: objCollector.currentIdx,
				color1: valColor1,
				color2: valColor2,
				color3: valColor3,
				deg: valDeg,
				timeForThis: randomTime
			})
			objCollector.currentIdx += 1;
			if (objCollector.currentIdx >= range) {
				objCollector.continue1 = false;
			}

			let val = `linear-gradient(${valDeg}deg,
						rgb(${valColor1}, ${valColor2}, ${valColor3}),
						rgb(${valColor3}, ${valColor1}, ${valColor2}),
						rgb(${valColor2}, ${valColor3}, ${valColor1}))`;
			item.style.backgroundImage = val;
		} else {
			let currentItem;
			if (objCollector.continue2Negatively) {
				if (objCollector.currentIdx === range) {
					currentItem =  objCollector.collection[range - 1];
					objCollector.currentIdx -= 1;
				} else {
					currentItem =  objCollector.collection[objCollector.currentIdx - 1];
					objCollector.currentIdx -= 1;
					if ((objCollector.currentIdx - 1) < 0) {
						objCollector.continue2Negatively = false;
					}					
				}
			} else {
				if ((objCollector.currentIdx) === 0) {
					currentItem =  objCollector.collection[0];
					objCollector.currentIdx += 1;
				} else {
					currentItem =  objCollector.collection[objCollector.currentIdx + 1];
					objCollector.currentIdx += 1;
					if ((objCollector.currentIdx + 1) === range) {
						objCollector.continue2Negatively = true;
					}	
				}
					
			}

			let val = `linear-gradient(${currentItem.deg}deg,
						rgb(${currentItem.color1}, ${currentItem.color2}, ${currentItem.color3}),
						rgb(${currentItem.color3}, ${currentItem.color1}, ${currentItem.color2}),
						rgb(${currentItem.color2}, ${currentItem.color3}, ${currentItem.color1}))`;
			item.style.backgroundImage = val;
			randomTime = currentItem.timeForThis;
		}

	}, randomTime)

		

	}
*/

let UIController = (function() {
	const variablesString = {
		spinningBackground1: ".spinningBackground1"
	}

	let nodeListForEach = function(list, callback) {
		for (let i = 0; i < list.length; i++) {
			callback(list[i], i);
		}
	}

	return {
		variables: variablesString,
		spinningBackgroundForMulti: function(elemArr, arrayHoldingColors, range) {
			const arr = arrayHoldingColors;
			randomTime = arr[0].timeForThis;
			let desinding = true;
			nodeListForEach(elemArr, function(current, index) {
				let counter = 0;
				setInterval(function() {
					
					if (desinding) {
						current.style.backgroundImage = arr[counter].backgroundImage;
						counter++;
						if (counter === range - 1) {
							desinding = false;
						} else {
							randomTime[counter];
						}
					} else if (!desinding) {
						current.style.backgroundImage = arr[counter].backgroundImage;
						counter--;
						if (counter === 0) {
							desinding = true;
						} else {
							randomTime[counter];
						}
					}
				}, randomTime)
			})
		}
	}


})();

let calculationsMaker = (function() {

	let setupObj = function(item) {
		let colorsValues = {
			"0": {
			num: randomNum(256, 0),
			positiveIncrease: TrueOrFalse()
			},
			 "1": {
				num: randomNum(256, 0),
				positiveIncrease: TrueOrFalse()
			}, "2": {
				num: randomNum(256, 0),
				positiveIncrease: TrueOrFalse()
			}
		};

		let holder = Object.keys(colorsValues)

		let counter = 0;
		function randomaizeVals () {
		    while (holder.length !== 0) {
		        let randomIdx = randomNum(holder.length, 0);
		        let r = String(holder.splice(randomIdx, 1));
		        
		        for (let i = 0; i < 1; i++) {
		            item[`color${counter + 1}`] = colorsValues[r];
		        }
		        counter++;
		    }
		}
		randomaizeVals ();

		let deg = {
			num: randomNum(360, 0),
			positiveIncrease: TrueOrFalse()
		}
		item.deg = deg;
		return item;
	}


	let randomNum = function(num, min) {
		if (num <= 1) {return Number((Math.random() * num + min).toFixed(2))}
		return Math.floor(Math.random() * num) + min;
	}

	let TrueOrFalse = function() {
		return Math.random() >= 0.5 ? true : false;
	}
		
	const range = function (max, min) {
		if (min < 0) {
			return Math.abs(Math.floor(max + Math.abs(min)) * 2);
		}
		if (min >= 0) {
			return Math.abs(Math.floor(max - Math.abs(min)) * 2);
		}	
	}

	let action = function(type, obj, num, min, max) {
		if (type === "deg" || type === "rgbColor") {
			if (obj.positiveIncrease) {
				if ((obj.num + num) >= max) {
					obj.positiveIncrease = false;
					obj.num = obj.num + num;
					return obj.num;
				} else {
					obj.num = obj.num + num;
				}
			}
			if (!(obj.positiveIncrease)) {
				if ((obj.num - num) <= min) {
					obj.positiveIncrease = true;
					obj.num = obj.num - num;
				} else {
					obj.num = obj.num - num;
				}
			}
			return obj.num;
		}
	}

	return {
		buildingColorsAndTimesObj: function(randomTime, randomTimeMin, minDeg, maxDeg) {
			let obj = {};
			setupObj(obj);
			let degRange = range(minDeg, maxDeg);
			obj.collectionObj = {
				currentIdx: 0,
				continuePosetively: false,
				continueNegatively: true,
				colorsCollection: []
			}
			let valColor1, valColor2, valColor3,valDeg;

			while(obj.collectionObj.currentIdx !== degRange) {
				valColor1 = action("rgbColor", obj.color1, randomNum(1, 0), 0, 256);
				valColor2 = action("rgbColor", obj.color2, randomNum(10, 0), 0, 256);
				valColor3 = action("rgbColor", obj.color3, randomNum(1, 0), 0, 256);
				valDeg = action("deg", obj.deg, randomNum(5, 1), 0, maxDeg);
				randomTime = randomNum(randomTime, randomTimeMin);

				obj.collectionObj.colorsCollection.push({
					id: obj.collectionObj.currentIdx,
					color1: valColor1,
					color2: valColor2,
					color3: valColor3,
					backgroundImage: `linear-gradient(${valDeg}deg, rgb(${valColor1}, ${valColor2}, ${valColor3}), rgb(${valColor3}, ${valColor1}, ${valColor2}), rgb(${valColor2}, ${valColor3}, ${valColor1}))`,
					deg: valDeg,
					timeForThis: randomTime
				})
				obj.collectionObj.currentIdx += 1;

			}
			return {
				colors: obj.collectionObj.colorsCollection,
				range: degRange
			};
		}
	}
})();

let controller = (function(UICtrl, calcsMaker) {


	
	let init = function () {
		
		let variablesString = UICtrl.variables;

		let spinningBackground1 = document.querySelectorAll(variablesString.spinningBackground1);
		
		/*
		let body = document.querySelector("body");
		let h2 = document.querySelectorAll("h2");
		let ol = document.querySelectorAll("ol");
		let li = document.querySelectorAll("li");
		let spinningBackground2 = [body, ...spinningBackground1, ...h2, ...ol, ...li];
		*/

		/*
		let all = document.querySelectorAll("*");
		all = [...all];
		all.splice(0, 6);
		all.splice(all.length - 1, 1)
		console.log(all);
		*/

		let obj1 = calcsMaker.buildingColorsAndTimesObj(25, 50, -720, 720);
		let colors1 = obj1.colors;
		let range1 = obj1.range;

		UICtrl.spinningBackgroundForMulti(spinningBackground1, colors1, range1);

	}
	
	return {
		init: init
	}
})(UIController, calculationsMaker);

controller.init();