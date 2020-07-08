let themebtn = document.querySelector("#themeButton");
let themeLink = themebtn.querySelector("a");

let themesNames = ["dark", "light", "solar"];
let themesValues;

let themesMap = [];
let prevNavBarTheme;
let currentNavBarTheme = localStorage.getItem('themeIdx') || 1;

document.addEventListener("DOMContentLoaded", () => {
  themesValues = themeLink.querySelectorAll("svg");
  themesNames.forEach( (item, idx) => {
    themesValues[idx].style.display = "none";
    themesMap.push({type:item, svg:themesValues[idx]});
  });

  themesMap[currentNavBarTheme].svg.style.display = "block";
  document.body.setAttribute("class", themesMap[currentNavBarTheme].type);
  themebtn.addEventListener("click", () => {
    prevNavBarTheme = currentNavBarTheme;
    if (currentNavBarTheme === themesMap.length - 1) {
      currentNavBarTheme = 0;
    } else {
      currentNavBarTheme++;
    }
    localStorage.setItem('themeIdx', currentNavBarTheme);
    themesMap[prevNavBarTheme].svg.style.display = "none";
    themesMap[currentNavBarTheme].svg.style.display = "block";
    document.body.setAttribute("class", themesMap[currentNavBarTheme].type);
  })
})


/*
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
*/