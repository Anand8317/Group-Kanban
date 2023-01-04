import { apiCall, dataJson } from './apiCall.js';

const render = async () => {
  await apiCall();
  const content = document.getElementById('content');
  dataJson[0].forEach((element) => {
    content.innerHTML += `
    <li id=${element.show.id} class="card">
      <img src=${element.show.image.medium} alt="Show Image" class="card-img">
      <div class="card-name-like-div">
        <p class="card-p">${element.show.name}</p>
        <button class="card-like">
        <span class="material-icons">
        favorite_border
        </span>
        </button>
      </div>
      <button class="card-comment">Comment</button>
    </li>
    `;
  });
};

export default render;