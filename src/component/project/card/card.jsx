import React from "react";
// import Styled from "styled-components";
import "./card.css";

// const category =
// Pr!!!
// Pikirin ada berapa categori dalam Project, Cari cara untuk bisa ngubah category content di ::after css nya make props, buat itu harus import Styled from "styled-components"

// const cardHover = document.querySelector(".card");

// cardHover.addEventListener("mouseenter", () => {
//   cardHover.classList.add("card-hover");
// });
// cardHover.addEventListener("mouseleave", () => {
//   cardHover.classList.remove("card-hover");
// });
const Card = (props) => {
  return (
    <li className="card">
      <img src={props.thumb} alt="thumb-project" className="thumbnail" />
      <a href="#" className="card-title">
        {props.title}
      </a>
      <p className="card-desc">{props.desc}</p>
    </li>
  );
};

// https://freesvg.org/img/mandelfish9.png

Card.defaultProps = {
  thumb: "https://freesvg.org/img/mandelfish9.png",
  title: "Input Title",
  desc: "Input Desc Max 30 Character",
};

export default Card;
