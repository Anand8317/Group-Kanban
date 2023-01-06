import homePageOption from "./homePageOption.js";
const dataJson = [''];
const apiCall = async (homePageOption) => {
  await fetch(`https://api.tvmaze.com/search/shows?q=${homePageOption[0]}`)
    .then((data) => data.json())
    .then((data) => {
      dataJson.length=0;
      dataJson.push(data);
    });

  for (let index = 0; index < dataJson[0].length; index += 1) {
    if (dataJson[0][index].show.image === null) {
      dataJson[0].splice(index, 1);
    }
  }
};

export { apiCall, dataJson };