import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import classes from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className={classes.footerLinks}>
        <a href="https://github.com/Amr-azab" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/amr-mohamed-b708a92a6/"
          target="_blank"
        >
          <FaLinkedin />
        </a>

        <a href="mailTo:amr.mz@hotmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
