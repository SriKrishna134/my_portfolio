import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "ReactJS", progress: 100, className: "react-progress", years: 3 },
    { name: "NodeJS", progress: 100, className: "node-progress", years: 3 },
    { name: "Deep Learning", progress: 90, className: "deeplearning-progress", years: 2 },
    { name: "MongoDB", progress: 90, className: "mongodb-progress", years: 2 },
    { name: "Spring Boot", progress: 90, className: "springboot-progress", years: 2 },
    { name: "Natural Language Processing", progress: 50, className: "nlp-progress", years: 1 },
    { name: "Large Language Models", progress: 50, className: "llm-progress", years: 1 },
    
    { name: "PostgreSQL", progress: 50, className: "postgresql-progress", years: 1},
    
  ]);

  return (
    <div>
      <h2 style={{ color: "black" }} >Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span style={{ color: "black" }} >{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;
