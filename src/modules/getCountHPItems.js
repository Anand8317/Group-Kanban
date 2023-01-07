import { dataJson } from './apiCall.js';

function getCountHPItems() {
  return dataJson[0].length;
}

export default getCountHPItems;