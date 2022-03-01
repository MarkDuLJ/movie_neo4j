export const getMoviesByYear = (arr, year) => {
  return arr.filter((item) => item.released <= year);
};

export const getMovieTitles = (arr) => {
  return arr.map((item) => item.title);
};

export const groupObj = (vals) => {
  let obj = {};
  vals.forEach((val) => {
    const key = Object.keys(val)[0];
    const value = Object.values(val)[0];
    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(value);
  });
  return obj;
};

export const mergeObjArr = (vals) => {
  let array = [];
  vals.forEach((val) => {
    const arr = [];
    const key = Object.keys(val)[0];
    const value = Object.values(val)[0];
    arr.push(value[0]);
    arr.push(key);
    arr.push(value[1]);
    array.push(arr);
  });
  return array;
};
