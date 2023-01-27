import { DESTINY_ITEMS } from "./const.js";

const destinyTitle = document.getElementById("destiny-title");

let name = "";
let number = "";
let thing = "";

const writePhrase = () => {
  destinyTitle.textContent = `${name} ${number} ${thing}`;
};

const randomNumber = (arrayLength) => Math.floor(Math.random() * arrayLength);

const printName = () => {
  const nameLength = DESTINY_ITEMS.names.length;
  name = DESTINY_ITEMS.names[randomNumber(nameLength)];
  writePhrase();
};
const printNumber = () => {
  const nameLength = DESTINY_ITEMS.numbers.length;
  number = "se merece " + DESTINY_ITEMS.numbers[randomNumber(nameLength)];
  writePhrase();
};
const printThing = () => {
  const nameLength = DESTINY_ITEMS.things.length;
  thing = DESTINY_ITEMS.things[randomNumber(nameLength)];
  writePhrase();
};

export { printName, printNumber, printThing, randomNumber };
