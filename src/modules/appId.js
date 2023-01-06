// const appId = "YbqlchYfwG2Z8zqcNCrW";
const axios = require('axios');

const appId = async () => {
  await axios
    .post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps',
    )
    .then((res) => res);
};

export default appId;