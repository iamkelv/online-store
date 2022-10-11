import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import classes from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import { CircularProgress } from "@mui/material";
let load = false;
export const HeroSection = () => {
  const [category, setCategory] = useState([]);
  const [limitItem, setLimitItems] = useState([]);
  const [isLoad, setIsLoad] = useState(undefined);

  const fetCategory = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  };
  const getLimitItem = async () => {
    load = false;
    console.log(load);
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    setLimitItems(data);

    load = true;
    console.log(load);
  };
  useEffect(() => {
    fetCategory();
    getLimitItem();
    return () => {};
  }, [setCategory, isLoad, setLimitItems]);

  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <ul>
          <li>Categories</li>
          {category.map((item) => (
            <li>
              <Link to="/" key={item}>
                <span>{item.toUpperCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={classes.center}>
        <div className={classes.center_top}>
          <Carousel
            renderIndicator={false}
            showThumbs={false}
            autoPlay={true}
            useKeyboardArrows={true}
            infiniteLoop={true}
            interval={3000}
            labels={false}
          >
            <div>
              <img src="../../assets/banner1.png" alt="" />
            </div>
            <div>
              <img src="../../assets/banner1.png" alt="" />
            </div>
            <div>
              <img src="../../assets/banner1.png" alt="" />
            </div>
          </Carousel>
        </div>
        <div className={classes.center_bottom}>
          <ul>
            {limitItem.map(({ id, title, image }) => {
              return (
                <>
                  <Link className={classes.link} to={`/product/${id}`}>
                    <li key={id}>
                      <img src={image} alt={title.substr(0, 20)} />
                      <span>{title.substr(0, 20)}</span>
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <div className={classes.right}>
        {" "}
        <div className={classes.right_header}>
          Todays Deals<span> Hots</span>
        </div>
        <div className={classes.right_item}>
          <ul>
            {limitItem.map(({ id, title, image }) => {
              return (
                <>
                  <li key={id}>
                    <Link to={`/product/${id}`}>
                      <img src={image} alt={title.substr(0, 20)} />
                      <span>{title.substr(0, 20)}</span>
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
