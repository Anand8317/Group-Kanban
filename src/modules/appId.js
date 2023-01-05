// const appId = "c3gboYetLUPBe0E2tsiz";
const axios = require('axios');

const appId = async () => {
  await axios
    .post(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps',
    )
    .then((res) => console.log(res));
};

export default appId;
// YbqlchYfwG2Z8zqcNCrW