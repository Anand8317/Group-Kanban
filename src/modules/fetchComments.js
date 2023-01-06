const axios = require('axios');

const fetchComment = async (id) => {
  const appId = 'YbqlchYfwG2Z8zqcNCrW';
  const endpoint = `apps/${appId}/comments?item_id=${id}`;
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/${endpoint}`;

  // try {
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   const res = await response.json();
  //   return res;
  // } catch (error) {
  //   if (error.message.includes('status: 400')) {
  //     return [];
  //   }
  // }
  // return [];
  let res = await axios.get(url);
  console.log(res);
  return res.data;
};

export default fetchComment;