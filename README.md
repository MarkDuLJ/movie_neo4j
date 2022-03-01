# Getting Started

This project has client and server parts, client call rest api to get data.

## How to install

Enter server and client directory, run "npm install"

### How to run

In server and client directory, runs "npm start" in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Open [http://localhost:5000](http://localhost:5000) to view endpoints.

The page will reload when you make changes.\

### api endpoint samples

http://localhost:5000/api/movies/Ninja%20Assassin
http://localhost:5000/api/movies
http://localhost:5000/api/people/Rain

### client side package descriptions

-- material UI table
@mui/material
@emotion/react
@emotion/styled

-- material UI core
@material-ui/core

-- material UI icons
@material-ui/icons

-- fetch data from server
axios

-- for routes
react-router-dom

### server side package descriptions

-- hot reload server
nodemon

-- config process enviroment
dotenv

-- connect with neo4j database
neo4j-driver

-- nodejs framework
express
