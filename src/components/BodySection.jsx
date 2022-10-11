import React, {useContext, useEffect} from "react";
import { ApiContext } from "../context/api-context";
import { ProductSection } from "./ProductSection";

const sectionTitle = [
  { title: "Flash Sale", timeDown: Date(), button: "View More" },
  { title: "New Products" },
  { title: "Featured Products" },
  { title: "Best Selling" },
  { title: "Auction Products" },
  { title: "Women Clothing & Fashion" },
  { title: "Men Clothing & Fashion" },
  { title: "Computer & Accessories" },
  { title: "Kids & toy" },
  { title: "Cellphones & Tabs" },
  { title: "Classified Ads" },
  { title: "Best Sellers" },
];

export const BodySection = ({ children }) => {  
  return (
    <div>
      <br />      
      {<ProductSection  url="" key="" headTitle="" />}
      <br />
    </div>
  );
};
