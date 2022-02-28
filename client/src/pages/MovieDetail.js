import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import neo4jApi from "../api/neo4jApi";
import { groupObj } from "../utils";

const MovieDetail = () => {
  let { title } = useParams();
  const [peopleList, setPeopleList] = useState(null);
  useEffect(() => {
    const getDetail = async () => {
      const response = await neo4jApi.getMovieByTitle(title);
      setPeopleList(response);
    };
    getDetail();
  }, [title]);
  if (!peopleList) return <h2>Loading people information...</h2>;
  const obj = groupObj(peopleList);

  return (
    <>
      {peopleList &&
        Object.keys(obj).map((role, i) => (
          <div key={i}>
            <h2>{role}</h2>
            <ul>
              {obj[role].map((person, j) => (
                <li key={j}>{person}</li>
              ))}
            </ul>
          </div>
        ))}
    </>
  );
};

export default MovieDetail;
