import './style.css';
import render from './modules/render.js';
import homePageOption from './modules/homePageOption';
import giveComment from './modules/comment-popup.js';
import fetchComment from './modules/fetchComments';

const call = async () => {
  await render();
  await giveComment();
  const result1 = await fetchComment('48440');
  console.log(result1);
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



