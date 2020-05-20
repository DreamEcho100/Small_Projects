let body = document.querySelector("body");
let myBlock;

document.addEventListener("DOMContentLoaded", () => {
    console.log("ready");
    myBlock = document.createElement("div");
    myBlock.textContent = "Hello world";
    body.appendChild(myBlock);
});