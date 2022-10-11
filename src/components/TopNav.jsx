import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

import classes from "./TopNav.module.css";

export const TopNav = () => {
  return (
    <div className={classes.nav_container}>
      <div className={classes.left_container}>
        <div className={classes.language}>
          <span>ENGLISH</span>{" "}
          <span>
            <AiOutlineDown />
          </span>
        </div>
        <div>
          U.S Dollar ${" "}
          <span>
            <AiOutlineDown />
          </span>{" "}
        </div>
      </div>
      <div className={classes.right_container}>
        <span>
          <BsTelephone />
        </span>
        <span>Help Line </span>
        <span>+2348060684357</span>|
        <span className={classes.login}>
          <Link to="/">Login</Link>
        </span>
        |
        <span>
          <Link to="/">Registration</Link>
        </span>
      </div>
    </div>
  );
};
