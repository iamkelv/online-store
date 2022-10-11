import React from "react";
import classes from "./footer.module.css";
import { FooterButtom } from "./FooterButtom";
import { FooterMain } from "./FooterMain";
import { FooterTop } from "./FooterTop";

export const Footer = () => {
  return (
    <div className={classes.container}>
      <FooterTop />
      <FooterMain />
      <FooterButtom />
    </div>
  );
};
