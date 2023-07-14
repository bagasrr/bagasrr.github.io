import React from "react";
import "./project.css";
import Card from "./card/card";

const Project = () => {
  return (
    <div className="project-container">
      <h1 className="title">My Portofolio</h1>
      <div className="project-item ">
        <div className="arrow left-arrow">&#60;</div>
        <ul className="card-container">
          <Card
            title="Project 1"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga consequatur ducimus maxime iure delectus tempore aliquid debitis amet vitae! Illo ex ab perspiciatis obcaecati. Aperiam recusandae consequuntur animi deserunt aliquam?"
          />
          <Card
            title="Project 2"
            desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga consequatur ducimus maxime iure delectus tempore aliquid debitis amet vitae! Illo ex ab perspiciatis obcaecati. Aperiam recusandae consequuntur animi deserunt aliquam?"
          />
        </ul>
        <div className="arrow right-arrow">&#62;</div>
      </div>
    </div>
  );
};

export default Project;

// const scrolLeft = document.querySelector(".left-arrow");
// scrolLeft.addEventListener("click", () => {
//   document.querySelector(".card-container").scrollLeft -= 2000;
// });

// const scrolRight = document.querySelector(".right-arrow");
// scrolRight.addEventListener("click", () => {
//   document.querySelector(".card-container").scrollLeft += 2000;
// });
