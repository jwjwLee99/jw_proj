import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>What is Movie App?</span>
      <span>Movie App is a movie recommendation service that offers a wide variety of movies. So you don't have to think about what to watch!</span>
    </div>
  );
}

export default About;