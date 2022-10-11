import React from "react";
import { NavBar } from "./NavBar";
import { NavMenu } from "./NavMenu";
import { TopNav } from "./TopNav";
import classes from "./Header.module.css";
export const Header = () => {
  return (
    <div className={classes.container}>
      <TopNav />
      <NavBar />
      <NavMenu />
    </div>
  );
};
