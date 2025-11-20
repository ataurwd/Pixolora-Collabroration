import React from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>My React App</title>
        <meta name="description" content="This is my React application." />
      </Helmet>
      <h1>Home page Design</h1>
    </div>
  );
};

export default HomePage;
