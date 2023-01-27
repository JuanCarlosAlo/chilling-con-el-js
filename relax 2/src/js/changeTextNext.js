import { INFO } from '../js/const.js';

let objectArray = Object.values(INFO);
let counter = 0;

const printText = counter => {
  card.children[0].textContent = objectArray[counter].title;
  card.children[1].textContent = objectArray[counter].description;
};

const counterNext = card => {
  printText(counter);
  if (counter === 4) {
    counter = 0;
  } else {
    counter++;
  }
};

const counterPrev = card => {
  console.log(objectArray[4]);
  if (counter === 0) {
    counter = 4;
  } else {
    counter--;
  }
  printText(counter);
};

export { counterNext, counterPrev };
