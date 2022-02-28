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
