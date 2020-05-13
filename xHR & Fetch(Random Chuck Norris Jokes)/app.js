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
        document.querySelector('div').innerHTML = `${joke.value} <br> <img src="${joke.icon_url}">`;
    }
}

xHR.open('GET', url);
xHR.send();
console.log(xHR);