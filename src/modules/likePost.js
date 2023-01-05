const axios = require('axios');

const likePost = async (itemId) => {
  await axios.post('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YbqlchYfwG2Z8zqcNCrW/likes/',
    { item_id: itemId });
};

export default likePost;