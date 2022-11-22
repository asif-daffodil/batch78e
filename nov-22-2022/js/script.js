const menues = document.getElementById("menues");
const details = document.getElementById("details");

const menuesArray = Array.from(menues.children);
const detailsArray = Array.from(details.children);

for (let i = 0; i < menuesArray.length; i++) {
  menuesArray[i].addEventListener("click", () => {
    for (let j = 0; j < detailsArray.length; j++) {
      if (i == j) {
        menuesArray[j].classList.add("active");
        detailsArray[j].classList.remove("d-none");
      } else {
        menuesArray[j]?.classList.remove("active");
        detailsArray[j].classList.add("d-none");
      }
    }
  });
}
