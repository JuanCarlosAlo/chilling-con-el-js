// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { listChange } from "../js/listChange.js";

const themesSelect = document.getElementById("themes");

console.dir(themesSelect[0]);

themesSelect.addEventListener("change", (e) => {
  listChange(themesSelect);
});
