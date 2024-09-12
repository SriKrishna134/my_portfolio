import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import "./index.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "C++", progress: 100, className: "css-progress", years: 3 },
    { name: "C", progress: 100, className: "c-progress", years: 3 },
    { name: "Java", progress: 75, className: "java-progress", years: 2 },
    { name: "HTML/CSS/JS", progress: 75, className: "web-progress", years: 2 },
    { name: "Python", progress: 37.5, className: "python-progress", years: 1.5 },
    { name: "go", progress: 24.5, className: "go-progress", years: 1 },
    

  ]);

  return (
    <div>
      <h2 style={{ color: "black" }} className="lam">Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span style={{ color: "black" }}>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default LanguageList;
