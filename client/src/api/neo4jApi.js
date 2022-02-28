import axiosClient from "./axiosClient";

const neo4jApi = {
  getMoviesList: () => {
    const url = "movies/";
    return axiosClient.get(url);
  },
  getMovieByTitle: (title) => {
    const url = "movies/" + title;
    return axiosClient.get(url);
  },
};
export default neo4jApi;
