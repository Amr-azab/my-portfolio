import React from "react";
import Tilt from "react-parallax-tilt";
import img from "../../img/imageazab.jpg";
import classes from "./home.module.css";
import Type from "../Type/type";

const Home = () => {
  return (
    <div>
      <div className={classes.HomePage}>
        <div className={classes.HomeText}>
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Amr Mohamed</b>
          </h1>
          <Type />
        </div>
        <Tilt>
          <img className={classes.Avatar} src={img} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
