let xHR = new XMLHttpRequest();
console.log(xHR);
const url  = "https://api.chucknorris.io/jokes/random";
console.log(url);

xHR.onreadystatechange = function() {
    console.log(xHR.readyState);
    if (xHR.readyState === 4 && xHR.status === 200) {
        console.log(xHR.response);
        let joke = JSON.parse(xHR.response);
        console.log(joke.value);
        document.getElementById('div1').innerHTML = `${joke.value} <br> <img src="${joke.icon_url}">`;
    }
}

xHR.open('GET', url);
xHR.send();
console.log(xHR);

//

const btn = document.getElementById("btn");
const url2 = "https://randomuser.me/api/";

btn.addEventListener("click", getInput);

function getInput() {
	fetch(url2)
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		console.log(data.results);
		document.getElementById('div2').innerHTML = `${JSON.stringify(data.results)} <br>`;
		//<img src="${joke.icon_url}">
	})
}