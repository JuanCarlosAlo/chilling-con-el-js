import { DESTINY_ITEMS } from './const.js';

const destinyTitle = document.getElementById('destiny-title');

let name;
let number;
let thing;

const writePhrase = () => {
  destinyTitle.textContent = `${name} se merece ${number} ${thing}`;
};

const randomNumber = arrayLength => Math.floor(Math.random() * arrayLength);

const printName = () => {
  const arrayLength = DESTINY_ITEMS.names.length;
  randomNumber(arrayLength);
  name = randomNumber(arrayLength);
  writePhrase();
};
const printNumber = () => {
  const arrayLength = DESTINY_ITEMS.numbers.length;
  number = randomNumber(arrayLength);
  writePhrase();
};
const printThing = () => {
  const arrayLength = DESTINY_ITEMS.things.length;
  randomNumber();
  thing = randomNumber(arrayLength);
  writePhrase();
};

export { printName, printNumber, printThing, randomNumber };
