import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import neo4jApi from "../api/neo4jApi";
import { mergeObjArr } from "../utils";
import MoviesTable from "../components/MoviesTable";

const PersonInMovies = () => {
  const { person } = useParams();
  const navigate = useNavigate();
  const [movieList, setmovieList] = useState(null);
  useEffect(() => {
    const getMoviesWithDetail = async () => {
      const response = await neo4jApi.getMoviesByPerson(person);
      setmovieList(response);
    };
    getMoviesWithDetail();
  }, [person]);
  if (!movieList) return <h2>Loading related movies information...</h2>;
  const list = mergeObjArr(movieList);
  return (
    <>
      <MoviesTable list={list} />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default PersonInMovies;
