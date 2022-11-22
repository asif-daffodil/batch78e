const myText = document.getElementById("myText");
const myImgg = document.getElementById("myImg");

myText.style.color = "blue";
myText.innerHTML = "Ami javascript er text";
myImgg.style.width = "200px";

function amarFunction() {
  myText.innerHTML = "Dhaka Bangladesher Rajdhani";
}

function tomarFunation() {
  myText.innerHTML = "Ami javascript er text";
  myText.style.color = "blue";
}

function red() {
  myText.style.color = "red";
}
let x = 1;
function myImg() {
  if (x === 1) {
    myImgg.src = "./inter.jpeg";
    x = 2;
  } else {
    myImgg.src = "./srk.jpg";
    x = 1;
  }
}
