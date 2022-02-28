export const getMoviesByYear = (arr, year) => {
  return arr.filter((item) => item.released <= year);
};
