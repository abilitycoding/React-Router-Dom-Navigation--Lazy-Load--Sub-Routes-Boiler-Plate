import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar";

const About = () => {
  const location = useLocation();
  console.log(location?.state?.someKey);
  return (
    <div>
      <Navbar />
      <h3>About</h3>
    </div>
  );
};

export default About;
