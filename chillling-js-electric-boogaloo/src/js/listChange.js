import { THEMES } from "../js/const.js";

const listContainer = document.getElementById("list-container");

const listChange = (themesSelect) => {
  listContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  Object.values(THEMES[themesSelect.value]).forEach((element, index) => {
    const newLi = document.createElement("li");
    newLi.textContent = THEMES[themesSelect.value][index];
    fragment.append(newLi);
  });
  listContainer.append(fragment);
  console.log(Object.values(THEMES[themesSelect.value]));
};

export { listChange };
