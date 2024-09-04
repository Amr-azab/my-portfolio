import React from "react";
import Typewriter from "typewriter-effect";
import classes from "./type.module.css";
const Type = () => {
  return (
    <div className={classes.TypeEffect}>
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "software enginner",
            "Full stack Developer",
          ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Type;
