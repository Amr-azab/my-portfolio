import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import classes from "./projectBox.module.css";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TwitterDesc:
      "Twitter clone application mainly front end focused with CRUD operation , Developed a Twitter clone using React and Node.js , Implemented features like tweet posting, real-time updates, and user authentication , •	Technologies: React, Node.js , MongoDB , Express js",
    TwitterGithub: "https://github.com/Amr-azab/twitter-full-stack-clone",
    TwitterWebsite: "https://twitter-full-stack.onrender.com/",

    countryDesc:
      " This country project displays all countries and their information, enabling you to search for any desired country through a filter , 	Technologies: React , Javascript ,API.",
    countryGithub: "https://github.com/Amr-azab/countries-informations",
    countryWebsite: "https://countries-informations-azab.vercel.app/",

    GuessMyNumberDesc:
      "The Guess My Number project is a simple and interactive game where users attempt to guess a randomly generated number between 1 and 20 • The project is implemented using HTML, CSS, and JavaScript to create a visually appealing and responsive user interface",
    GuessMyNumberGithub: "https://github.com/Amr-azab/Guess-The-Number",
    GuessMyNumberWebsite: "https://guess-the-number-azab.vercel.app/",
  };

  return (
    <div className={classes.projectBox}>
      <img
        className={classes.projectPhoto}
        src={projectPhoto}
        alt="Project display"
      />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={classes.projectbtn}>
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={classes.projectbtn}>
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
