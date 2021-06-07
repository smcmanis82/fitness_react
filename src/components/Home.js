import React from "react";
import "./Home.css";
import fitness from "./images/fitness.jpg";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Fitness Tracker!</h1>
      <img src={fitness} className="center" height={350} width={700} />
    </div>
  );
};

export default Home;
