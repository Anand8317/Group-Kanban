import './style.css';
import render from './modules/render.js';
import homePageOption from './modules/homePageOption.js';
import style from './modules/style';

const call = async () => {
  await render();
  style();
};
call();

const homePageButtons = document.querySelectorAll('.homePageOptions');
homePageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    homePageOption.length = 0;
    homePageOption.push(button.id);
    call();
  });
});
