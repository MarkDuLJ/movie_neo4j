import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import neo4jApi from "../api/neo4jApi";

const PersonInMovies = () => {
  const { person } = useParams();
  const [movieList, setmovieList] = useState(null);
  useEffect(() => {
    const getMoviesWithDetail = async () => {
      const response = await neo4jApi.getMoviesByPerson(person);
      console.log(response);
      setmovieList(response);
    };
    getMoviesWithDetail();
  }, [person]);
  if (!movieList) return <h2>Loading related movies information...</h2>;
  return <div>People</div>;
};

export default PersonInMovies;
