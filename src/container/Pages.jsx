import React, { Component } from "react";
import Navbar from "../component/navbar/navbar";
import Home from "../component/homePage/home";
import Project from "../component/project/project";
import Footer from "../component/footer/footer";
import "./pages.css";

class Pages extends Component {
  render() {
    return (
      <div className="parent">
        <Navbar />
        <Home />
        <Project />
        <Footer />

      </div>
    );
  }
}

export default Pages;
