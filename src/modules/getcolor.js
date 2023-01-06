/* eslint-disable max-len */
function getDominantColor(src) {
  // create an image element
  const image = new Image();
  image.src = src;

  // create a canvas element
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  // set its dimension to the image's size
  canvas.width = image.width;
  canvas.height = image.height;

  // draw the image on the canvas
  context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0, 0, image.width, image.height);

  // get the image data
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;

  // store the RGB values in an array
  const pixelColors = [];
  for (let i = 0, n = data.length; i < n; i += 4) {
    const red = data[i];
    const green = data[i + 1];
    const blue = data[i + 2];
    pixelColors.push([red, green, blue]);
  }

  // sort the array in descending order
  pixelColors.sort((a, b) => b[0] - a[0]);

  // get the top 10 most common colors
  const dominantColors = pixelColors.slice(0, 10);

  // sort the array in ascending order
  dominantColors.sort((a, b) => a[0] - b[0]);

  // return the dominant color
  return dominantColors[0];
}

export default getDominantColor;