import React from "react";
import {aboutData} from "../../datas/data"
const About = () => {
  return (
    <>
        <h2 className=" aboutTitle"id ="about">
          About
        </h2>
        <p className="aboutSection">{aboutData[0].content}</p> 
    </>

  );
};

export default About;

