import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./components/App";
import Movies from "./pages/Movies";
import PersonInMovies from "./pages/PersonInMovies";
import MovieDetail from "./pages/MovieDetail";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="movies" element={<Movies />}>
          <Route path=":title" element={<MovieDetail />} />
        </Route>
        <Route path="people/:person" element={<PersonInMovies />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
