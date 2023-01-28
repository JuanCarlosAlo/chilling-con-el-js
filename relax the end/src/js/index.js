// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { openAccordion } from "../js/openAccordion.js";

const accordion = document.getElementById("accordion");

accordion.addEventListener("click", (e) => {
  const bodyElement = e.target.nextElementSibling;
  console.log(bodyElement);
  openAccordion(bodyElement);
});
