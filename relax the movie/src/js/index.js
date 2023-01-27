// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { counterNext, counterPrev } from '../js/changeTextNext';

const previous = document.getElementById('previuos-card');
const next = document.getElementById('next-card');
const card = document.getElementById('card');

previous.addEventListener('click', () => {
  counterPrev(card);
});

next.addEventListener('click', () => {
  counterNext(card);
});
