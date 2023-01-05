import { apiCall, dataJson } from './apiCall.js';
// import render from './render.js';

const showPopup = async (id) => {
  await apiCall();
  const data = dataJson;
  const moviesList = data[0];

  moviesList.forEach((movie) => {
    const movieIds = movie.show.id;

    if (id === movieIds.toString()) {
      const imgurl = movie.show.image.original;
      const popup = document.querySelector('#modal-popup');
      popup.innerHTML = '';

      popup.innerHTML += `<div id="modal">
        <span class="close"> &times;</span>
        <div class="modal-img"></div>
        <h1 class="modal-title">${movie.show.name}</h1>

        <div class="movie-details">
          <div class="modal-item">
            <p>premiered:<br>${movie.show.premiered}</p>
            <p>averageRuntime:<br>${movie.show.averageRuntime}</p>
          </div>
          <div class="modal-item">
            <p>type:<br>${movie.show.type}</p>
            <p>official site:<br> ${movie.show.officialSite}</p>
          </div>
        </div>

        <div class="comments">
          <h2 class="comment-header">comments(2)</h2>
          <p class="comment-text">12/15/2020 Sam: Best movies series ever</p>
          <p class="comment-text">12/15/2020 Anand: Best movies series ever</p>
        </div>

        <div class="comment-form">
          <p>Add a comment</p>
          <form action="">
            <input
              type="text"
              id="fname"
              value=""
              placeholder="Your name"
              required
            /><br />
            <input
              type="textarea"
              id="insight"
              rows="4"
              cols="50"
              placeholder="Your insights"
              required
            /><br />
            <input
              type="submit"
              id="comment-btn"
              value="comment"
              placeholder=""
            />
          </form>
        </div>
      </div>`;
      const movieImg = document.querySelector('.modal-img');
      movieImg.style.backgroundImage = `url(${imgurl})`;
      popup.style.display = 'block';
    }
  });
};

export const collapsePopup = () => {
  const closeBtn = document.querySelector('.close');

  closeBtn.addEventListener('click', () => {
    const popup = document.querySelector('#modal-popup');
    popup.style.display = 'none';
  });
};

const giveComment = async () => {
  const commentBtn = document.querySelectorAll('.card-comment');

  // when comment btn is clicked
  commentBtn.forEach((item) => {
    const clickedbtn = item;
    clickedbtn.addEventListener('click', async () => {
      const ids = item.parentNode.id; // get dynamic ids of button..
      await showPopup(ids);
      collapsePopup();
    });
  });
};

export default giveComment;