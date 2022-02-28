import React from "react";
import { Outlet } from "react-router-dom";

import Layout from "../pageLayout/Layout";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;
