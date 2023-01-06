import render from './render.js';
import likePost from './likePost.js';

const likePostEvent = async () => {
  const allLikes = document.querySelectorAll('.card-like');
  allLikes.forEach((like) => {
    like.addEventListener('click', async () => {
      await likePost(like.id);
      await render();
    });
  });
};

export default likePostEvent;