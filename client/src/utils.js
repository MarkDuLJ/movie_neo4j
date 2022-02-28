export const getMoviesByYear = (arr, year) => {
  return arr.filter((item) => item.released <= year);
};
export const getMovieTitles = (arr) => {
  return arr.map((item) => item.title);
};
