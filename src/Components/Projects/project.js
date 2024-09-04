import React from "react";
import ProjectBox from "./projectBox/projectBox";
import TwitterImage from "../../img/twitterpage.PNG";
import CountriesImage from "../../img/countriesWeb.PNG";
import GameImage from "../../img/guessthenumber.PNG";

import classes from "./projectBox/projectBox.module.css";

const Projects = () => {
  return (
    <div>
      <h1 className={classes.projectHeading}>
        My <b>Projects</b>
      </h1>
      <div className={classes.project}>
        <ProjectBox projectPhoto={TwitterImage} projectName="Twitter" />
        <ProjectBox projectPhoto={CountriesImage} projectName="country" />
        <ProjectBox projectPhoto={GameImage} projectName="GuessMyNumber" />
      </div>
    </div>
  );
};

export default Projects;
