/* eslint-disable import/no-mutable-exports */
import { apiCall, dataJson } from './apiCall.js';
import formDetails from './getFormDetails.js';
import fetchComment from './fetchComments.js';
import homePageOption from './homePageOption.js';

const showPopup = async (id, commentList) => {
  await apiCall(homePageOption);
  const data = dataJson;
  const moviesList = data[0];

  moviesList.forEach((movie) => {
    const movieIds = movie.show.id;

    if (id === movieIds.toString()) {
      const imgurl = movie.show.image.original;
      const popup = document.querySelector('#modal-popup');
      popup.innerHTML = '';

      // Generate HTML for modal window
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
          <h2 class="comment-header">comments( ${commentList.length} )</h2>
          ${commentList.map((comment) => `<p class="comment-text">${comment.creation_date} ${comment.username}: ${comment.comment}</p>`).join('')}
        </div>

        <div class="comment-form">
          <h2>Add a comment</h2>
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
  commentBtn.forEach(async (item) => {
    const clickedbtn = item;
    clickedbtn.addEventListener('click', async () => {
      const ids = item.parentNode.id; // get dynamic ids of button..
      const comments = await fetchComment(ids);
      console.log(comments);
      await showPopup(ids, comments);
      formDetails(ids);
      collapsePopup();
    });
  });
};

export default giveComment;