import React from "react";
import { AdsSection } from "../components/AdsSection";
import { BodySection } from "../components/BodySection";
import { HeroSection } from "../components/HeroSection";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AdsSection />
      <BodySection />
    </div>
  );
};
