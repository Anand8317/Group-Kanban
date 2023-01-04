let dataJson = '';
const apiCall = async () => {
  await fetch('https://api.tvmaze.com/search/shows?q=anime')
    .then((data) => data.json())
    .then((data) => {
      dataJson = data;
    });

  for (let index = 0; index < dataJson.length; index += 1) {
    if (dataJson[index].show.image === null) {
      dataJson.splice(index, 1);
    }
  }
};

export {dataJson, apiCall};