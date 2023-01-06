import './style.css';
import render from './modules/render.js';
import giveComment from './modules/comment-popup.js';

const call = async () => {
  await render();
  await giveComment();
};
call();
