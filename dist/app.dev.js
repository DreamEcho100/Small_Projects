"use strict";

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
var UIController = function () {
  var variablesString = {
    spinningBackground1: ".spinningBackground1"
  };

  var nodeListForEach = function nodeListForEach(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    variables: variablesString,
    spinningBackgroundForMulti: function spinningBackgroundForMulti(elemArr, arrayHoldingColors, range) {
      var arr = arrayHoldingColors;
      randomTime = arr[0].timeForThis;
      var desinding = true;
      nodeListForEach(elemArr, function (current, index) {
        var counter = 0;
        setInterval(function () {
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
        }, randomTime);
      });
    }
  };
}();

var calculationsMaker = function () {
  var setupObj = function setupObj(item) {
    var colorsValues = {
      0: {
        num: randomNum(256, 0),
        positiveIncrease: TrueOrFalse()
      },
      1: {
        num: randomNum(256, 0),
        positiveIncrease: TrueOrFalse()
      },
      2: {
        num: randomNum(256, 0),
        positiveIncrease: TrueOrFalse()
      }
    };
    var holder = Object.keys(colorsValues);
    var counter = 0;

    function randomaizeVals() {
      while (holder.length !== 0) {
        var randomIdx = randomNum(holder.length, 0);
        var r = String(holder.splice(randomIdx, 1));

        for (var i = 0; i < 1; i++) {
          item["color".concat(counter + 1)] = colorsValues[r];
        }

        counter++;
      }
    }

    randomaizeVals();
    var deg = {
      num: randomNum(360, 0),
      positiveIncrease: TrueOrFalse()
    };
    item.deg = deg;
    return item;
  };

  var randomNum = function randomNum(num, min) {
    if (num <= 1) {
      return Number((Math.random() * num + min).toFixed(2));
    }

    return Math.floor(Math.random() * num) + min;
  };

  var TrueOrFalse = function TrueOrFalse() {
    return Math.random() >= 0.5 ? true : false;
  };

  var range = function range(max, min) {
    if (min < 0) {
      return Math.abs(Math.floor(max + Math.abs(min)) * 2);
    }

    if (min >= 0) {
      return Math.abs(Math.floor(max - Math.abs(min)) * 2);
    }
  };

  var action = function action(type, obj, num, min, max) {
    if (type === "deg" || type === "rgbColor") {
      if (obj.positiveIncrease) {
        if (obj.num + num >= max) {
          obj.positiveIncrease = false;
          obj.num = obj.num + num;
          return obj.num;
        } else {
          obj.num = obj.num + num;
        }
      }

      if (!obj.positiveIncrease) {
        if (obj.num - num <= min) {
          obj.positiveIncrease = true;
          obj.num = obj.num - num;
        } else {
          obj.num = obj.num - num;
        }
      }

      return obj.num;
    }
  };

  return {
    buildingColorsAndTimesObj: function buildingColorsAndTimesObj(randomTime, randomTimeMin, minDeg, maxDeg) {
      var obj = {};
      setupObj(obj);
      var degRange = range(minDeg, maxDeg);
      obj.collectionObj = {
        currentIdx: 0,
        continuePosetively: false,
        continueNegatively: true,
        colorsCollection: []
      };
      var valColor1, valColor2, valColor3, valDeg;

      while (obj.collectionObj.currentIdx !== degRange) {
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
          backgroundImage: "linear-gradient(".concat(valDeg, "deg, rgb(").concat(valColor1, ", ").concat(valColor2, ", ").concat(valColor3, "), rgb(").concat(valColor3, ", ").concat(valColor1, ", ").concat(valColor2, "), rgb(").concat(valColor2, ", ").concat(valColor3, ", ").concat(valColor1, "))"),
          deg: valDeg,
          timeForThis: randomTime
        });
        obj.collectionObj.currentIdx += 1;
      }

      return {
        colors: obj.collectionObj.colorsCollection,
        range: degRange
      };
    }
  };
}();

var ContentBuilder = function () {
  var contentObj = [{
    mainSectionHeader: "Developedbyed",
    mainSectionHeaderType: "h2",
    mainSectionInfo: "Developedbyed",
    mainSectionClass: "main-section Site",
    courses: [{
      courseSectionHeader: "The Creative Front End Development Bundle",
      courseSectionHeaderType: "h3",
      courseSectionInfo: "This course main focus is in practicing JavaScript",
      courseSectionClases: "spinningBackground1",
      projects: [coursesProjectObjBuilder("none", "Beatmaker", "index.html", 2.5, {
        languages: ["HTML", "CSS", "JavaScript"],
        libraries: [],
        frameworks: [],
        APIs: []
      }, "Building a Beatmaker."), coursesProjectObjBuilder("none", "Coloors", "index.html", 2.5, {
        languages: ["HTML", "CSS", "JavaScript"],
        libraries: [],
        frameworks: [],
        APIs: []
      }, "Building a colors library picker."), coursesProjectObjBuilder("none", "Photon", "index.html", 2, {
        languages: ["HTML", "CSS", "JavaScript"],
        libraries: [],
        frameworks: [],
        APIs: []
      }, "Building a Photo search using pexels API."), coursesProjectObjBuilder("none", "Todo List", "index.html", 2.25, {
        languages: ["HTML", "CSS", "JavaScript"],
        libraries: [],
        frameworks: [],
        APIs: []
      }, "Building a Todo List that have the functionality of saving, removing and filtering items."), coursesProjectObjBuilder("none", "Travel Website", "index.html", 2.75, {
        languages: ["HTML", "CSS", "JavaScript"],
        libraries: [],
        frameworks: [],
        APIs: []
      }, "Building a Travel Website using some cool scrolling animations and page transitions.")]
    }, {
      courseSectionHeader: "The Creative HTML5 & CSS3 Course",
      courseSectionHeaderType: "h3",
      courseSectionInfo: "This course main focus is in practicing HTML&CSS",
      courseSectionClases: "spinningBackground1",
      projects: [coursesProjectObjBuilder("specialCharsChange", "Travelly | Travelling Agency", "index.html", 2.75, {
        languages: ["HTML", "CSS"],
        libraries: [],
        frameworks: [],
        APIs: []
      }, "Building a Travelly | Travelling Agency website.")]
    }]
  }];

  function coursesProjectObjBuilder(type, projectName, projectFileType, difficulty, tech, projectInfo) {
    return {
      type: type,
      projectName: projectName,
      projectFileType: projectFileType,
      difficulty: difficulty,
      tech: tech,
      projectInfo: projectInfo
    };
  }

  function sectionBuilding() {
    var content = "";
    contentObj.forEach(function (section) {
      content += "<section class=\"".concat(section.mainSectionClass, "\">");
      content += "<".concat(section.mainSectionHeaderType, " class=\"tooltip-section\">").concat(section.mainSectionHeader, " <button class=\"subElemContainngInfo\" data-section-content=\"").concat(section.mainSectionInfo, "\">i</button></").concat(section.mainSectionHeaderType, ">\n\t\t\t<div class=\"tooltip-output\"></div><ol>");
      content += innerContentHTMLBuilder(section.courses, section.mainSectionHeader);
      content += "</ol></section>";
    });
    return content;
  }

  function innerContentHTMLBuilder(courses, urlStart) {
    var urlCont;
    var innerContent = "";
    courses.forEach(function (course) {
      innerContent += "<li><section class=\"".concat(course.courseSectionClases, "\">\n\t\t\t\t\t<").concat(course.courseSectionHeaderType, " class=\"tooltip-section\">").concat(course.courseSectionHeader, " <button class=\"subElemContainngInfo\" data-section-content=\"").concat(course.courseSectionInfo, "\">i</button></").concat(course.courseSectionHeaderType, ">\n\t\t\t\t\t<div class=\"tooltip-output\"></div>\n\t\t\t\t\t<ol>");
      urlCont = "".concat(urlStart, "/").concat(course.courseSectionHeader);
      innerContent += projectsContentHTMLBuilder(course.projects, urlCont);
      innerContent += "\t</ol>\n\t\t\t\t\t\t\t  </section></li>";
    });
    return innerContent;
  }

  function projectsContentHTMLBuilder(projects, url) {
    var deepInnerContent = "";
    projects.forEach(function (project) {
      if (project.type === "none") {
        deepInnerContent += "<li>\n\t\t\t\t\t\t\t<a href=\"".concat(url, "/").concat(project.projectName, "/").concat(project.projectFileType, "\"  target=\"_blank\">\n\t\t\t\t\t\t\t  ").concat(project.projectName, "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </li>");
      } else if (project.type === "specialCharsChange") {
        url = "".concat(url, "/").concat(project.projectName.replace(/[|]/g, "-"), "/").concat(project.projectFileType);
        deepInnerContent += "<li>\n\t\t\t\t\t\t\t<a href=\"".concat(url, "\"  target=\"_blank\">\n\t\t\t\t\t\t\t  ").concat(project.projectName, "\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t  </li>");
      }
    });
    return deepInnerContent;
  }

  function tooltipBuilder() {
    var _loop = function _loop(i) {
      var currElem = tooltipSection[i];
      var currSubElem = currElem.querySelector(".subElemContainngInfo");
      var currOutput = currElem.nextElementSibling;
      currSubElem.addEventListener("mousemove", function (e) {
        // mouseover
        var holder = this.getAttribute("data-section-content");
        currOutput.style.display = "block";
        currOutput.style.top = "".concat(e.clientY + 5, "px");
        currOutput.style.left = "".concat(e.clientX + 5, "px");
        currOutput.innerHTML = holder;
      });
      tooltipSection[i].addEventListener("mouseout", function () {
        currOutput.style.display = "none";
      });
    };

    for (var i = 0; i < tooltipSection.length; i++) {
      _loop(i);
    }
  }

  return {
    HTMLContent: sectionBuilding,
    tooltipBuilder: tooltipBuilder
  };
}();

var controller = function (contentBuilder, UICtrl, calcsMaker) {
  var init = function init() {
    var HTMLContent = contentBuilder.HTMLContent();
    document.body.prepend(HTMLContent);
    contentBuilder.tooltipBuilder();
    var variablesString = UICtrl.variables;
    var spinningBackground1 = document.querySelectorAll(variablesString.spinningBackground1);
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

    var obj1 = calcsMaker.buildingColorsAndTimesObj(25, 50, -720, 720);
    var colors1 = obj1.colors;
    var range1 = obj1.range;
    UICtrl.spinningBackgroundForMulti(spinningBackground1, colors1, range1);
  };

  return {
    init: init
  };
}(ContentBuilder, UIController, calculationsMaker);

controller.init();