import React from "react";
import { aboutData } from "../../datas/data"
const About = () => {
  return (
    <>
        <h2 className=" aboutTitle"id ="about">
          About
        </h2>
        <div className="aboutSection">
          {aboutData.map((item, index) => (
        <p key={index}>{item.content}</p> 
          ))}
        </div>
    </>

  );
};

export default About;

