const axios = require('axios');

const likeData = [];
const getLikes = async () => {
  const like = await axios.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YbqlchYfwG2Z8zqcNCrW/likes/');
  likeData.length = 0;
  likeData.push(like.data);
};

export { getLikes, likeData };