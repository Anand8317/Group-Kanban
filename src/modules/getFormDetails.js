import Comment from './addComment.js';

// get form data...
const formDetails = (itemId) => {
  const userName = document.querySelector('#fname');
  const message = document.querySelector('#insight');

  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = userName.value;
    const commentText = message.value;
    const userComment = new Comment(itemId, name, commentText);
    userComment.postComment(userComment);

    userName.value = '';
    message.value = '';
  });
};

export default formDetails;