import express from "express";
import app from "./app.js";

const port = process.env.APP_PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/`);
});
