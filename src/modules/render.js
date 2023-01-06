/* eslint-disable camelcase */
import { apiCall, dataJson } from './apiCall.js';
import { likeData, getLikes } from './getLikes.js';
import likePost from './likePost.js';
import homePageOption from './homePageOption.js';
import getCountHPItems from './getCountHPItems.js';

const render = async () => {
  await apiCall(homePageOption);
  await getLikes();
  const content = document.getElementById('content');
  const dispCount = document.getElementById(homePageOption);
  let count = getCountHPItems();
  dispCount.innerHTML = `<p class="head-text">${homePageOption} (${count})</p>`;
  content.innerHTML = '';
  await dataJson[0].forEach((element) => {
    let result = likeData[0].find(({ item_id }) => item_id === `${element.show.id}`);
    result = result ? result.likes : 0;
    content.innerHTML += `
    <li class="card" id=${element.show.id}>
      <img src=${element.show.image.medium} alt="Show Image" class="card-img">
      <div class="card-name-like-div">
        <p class="card-p">${element.show.name}</p>
        <button class="card-like" id=${element.show.id}>
        <span class="material-icons">
        favorite_border
        </span>
        </button>
        <p>${result}</p>
      </div>
      <button class="card-comment">Comment</button>
    </li>
    `;
  });

  const allLikes = document.querySelectorAll('.card-like');
  allLikes.forEach((like) => {
    like.addEventListener('click', async () => {
      await likePost(like.id);
      await render();
    });
  });
};

export default render;