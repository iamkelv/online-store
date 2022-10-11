import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavMenu.module.css";

export const NavMenu = () => {
  return (
    <div className={classes.container}>
      <ul>
        {[
          "Home",
          "For Sale",
          "Blogs",
          "All Brands",
          "All Categories",
          "All Sellers",
          "Coupons",
        ].map((menu) => (
          <li key={menu}><Link to='/'>{menu}</Link></li>
        ))}
      </ul>
    </div>
  );
};
