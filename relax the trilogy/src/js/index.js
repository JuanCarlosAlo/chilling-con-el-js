// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { printName, printNumber, printThing } from "../js/printText.js";

const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.dataset.item === "name") {
    printName(e.target.dataset.item);
  } else if (e.target.dataset.item === "number") {
    printNumber(e.target.dataset.item);
  } else if (e.target.dataset.item === "thing") {
    printThing(e.target.dataset.item);
  }
});
