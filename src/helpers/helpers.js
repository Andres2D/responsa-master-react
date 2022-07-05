
export const scrambleArray = array => {
  let currentIndex = array.length, randomIndex;
  while(currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
};

export const decodeHtml = text => {
  var txt = document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
};

export const getRandomPosition = (array) => {
  return array[Math.floor(Math.random() * array.length - 1)];
};
