import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgPhone } from "react-icons/cg";
import classes from "./navbar.module.css";

const Nav = () => {
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarBlur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`${classes.Navbar} ${navbarBlur ? classes.blur : ""}`}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className={classes.Logo}
      >
        Amr Azab
      </h1>

      <div className={classes.Hamburger} onClick={toggleMenu}>
        <span
          className={`${classes.bar} ${menuOpen ? classes.barOne : ""}`}
        ></span>
        <span
          className={`${classes.bar} ${menuOpen ? classes.barTwo : ""}`}
        ></span>
        <span
          className={`${classes.bar} ${menuOpen ? classes.barThree : ""}`}
        ></span>
      </div>

      <ul
        className={`${classes.NavbarLinks} ${
          menuOpen ? classes.showNavbar : ""
        }`}
      >
        <li onClick={closeMenu}>
          <Link to="/">
            <AiOutlineHome /> Home
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/About">
            <BsPerson /> About
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/Project">
            <BsCodeSlash /> Projects
          </Link>
        </li>
        {/* <li onClick={closeMenu}>
          <Link to="/Contact">
            <CgPhone /> Contact
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
