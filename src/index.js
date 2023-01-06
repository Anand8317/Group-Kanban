import './style.css';
import render from './modules/render.js';
import homePageOption from './modules/homePageOption';
import giveComment from './modules/comment-popup.js';

const call = async () => {
  await render();
  await giveComment();
};
call();

let homePageButtons = document.querySelectorAll('.homePageOptions');
homePageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    homePageOption.length = 0;
    homePageOption.push(button.id);
    console.log(homePageOption);
    call();
  })
})



