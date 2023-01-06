import getCountHPItems from "../modules/getCountHPItems.js";
import { dataJson } from "../modules/apiCall.js";

test('Counting the home page items', () => { 
  // Arrange
  const actualCount = dataJson[0].length ? dataJson[0].length : 0;
  
  // Act
  const funcCount = getCountHPItems() ? getCountHPItems : 0;

  // Assert
  expect(funcCount).toEqual(actualCount);
})