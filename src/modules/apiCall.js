const dataJson = [];
const apiCall = async () => {
  await fetch('https://api.tvmaze.com/search/shows?q=anime')
    .then((data) => data.json())
    .then((data) => {
      dataJson.push(data);
    });

  for (let index = 0; index < dataJson[0].length; index += 1) {
    if (dataJson[0][index].show.image === null) {
      dataJson[0].splice(index, 1);
    }
  }
};

export { apiCall, dataJson };