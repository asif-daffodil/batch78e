const mydiv = document.getElementById("mydiv");
mydiv.style.cssText = `
    width: 100%;
    height: 100vh;
    display: flex;
`;

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const button = document.createElement("button");

h2.innerHTML = "Kaifa Haluka";
p.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tempore veniam sed fuga quo, saepe doloribus, quos dignissimos inventore quibusdam id? Aperiam earum id repellendus quaerat maiores, sequi modi architecto.";
button.innerText = "Read More";

div1.appendChild(h2);
div1.appendChild(p);
div1.appendChild(button);
div2.classList.add("div2");
div1.appendChild(div2);
div1.classList.add("div1");

const crrTime = () => {
  const d = new Date();
  const time = `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
  div2.innerHTML = time;
};

setInterval(crrTime, 1000);

mydiv.appendChild(div1);

tomal.addEventListener("submit", (e) => {
  e.preventDefault();
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const jogfol = document.getElementById("jogfol");
  jogfol.innerText = parseFloat(num1) + parseFloat(num2);
});
