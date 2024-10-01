import React from "react";
import Skills from "../Skills/skills";
import classes from "./about.module.css";
const About = () => {
  return (
    <>
      <div className={classes.AboutPage}>
        <div className={classes.AboutText}>
          <h1 className={classes.AboutTextHeading}>
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Amr Mohamed </b>, I'm a <b>23 years old</b> and I
            graduated from The College of{" "}
            <b>
              Computer Science and Information Technology at Future University{" "}
            </b>
            . <br />
            <br />I am interested in <b> web developmenet </b> and have worked
            on projects such as Twitter and else , you can check out some of my
            work in the projects section.
            <br />
            <br />I <b>trained</b> at <b>AITB </b>, and from this training , I
            learned <b> Node.js</b>, worked on a project using <b> Node.js</b>{" "}
            ,understood <b>Postman , APIa and MVC</b>.
            <br />
            <br />I worked at <b>FAB MISR Bank</b> I was working on monitoring
            the software and system of the ATM.I was working with the Aptra
            software, which displayed the ATM issues. I gained experience in
            communicating with people and solving problems.
          </p>
        </div>

        <div></div>
      </div>

      <h1 className={classes.SkillsHeading}> Skillset</h1>
      <div className={classes.skills}>
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Javascript" />
        <Skills skill="TypeScript" />
        <Skills skill="NodeJS" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
        <Skills skill="Postman" />
        <Skills skill="MongoDB" />
        <Skills skill="SQL" />
        <Skills skill="Express" />
        <Skills skill="NextJS" />
        <Skills skill="Docker" />
        <Skills skill="CSharp" />
      </div>
    </>
  );
};

export default About;
