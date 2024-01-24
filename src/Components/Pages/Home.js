import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar";

const Home = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />
      <h3>Home Page</h3>
    </div>
  );
};

export default Home;
