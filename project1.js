


let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");
let one = document.getElementsByClassName("one");
let two = document.getElementsByClassName("two");
let three = document.getElementsByClassName("three");
let four = document.getElementsByClassName("four");
let rotateValue = circle.style.transform;
let rotateSum;

upBtn.onclick = function(){
    circle.style.transform = rotateValue + "rotate(-90deg)";
    rotateValue = circle.style.transform;
}
downBtn.onclick = function(){
    circle.style.transform = rotateValue + "rotate(90deg)";
    rotateValue = circle.style.transform;
}