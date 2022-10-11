import { useState, useEffect } from "react";
import { Product } from "./Product";
import classes from "./vcard.module.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CircularProgress } from "@mui/material";

export const Vcard = ({ title, link }) => {
  const [product, setProduct] = useState([]);
  const [IsLoad, setIsLoad] = useState(false);
  const [leftArrow, setLeftArrow] = useState(20);
  const [rightArrow, setRightArrow] = useState(leftArrow);

  const fetchProducts = async (props) => {
    IsLoad(false);

    const res = await fetch(link);
    const data = await res.json();
    setProduct(data);
    setIsLoad(true);
  };
  useEffect(() => {
    fetchProducts();
  }, [product, setIsLoad]);
  const left = () => {
    if (leftArrow <= 200) {
      setLeftArrow(leftArrow + 20);
    } else {
      return leftArrow;
    }
  };
  const right = () => {
    if (leftArrow >= -200) {
      setLeftArrow(leftArrow - 20);
    } else {
      return leftArrow;
    }
  };

  return (
    <div className={classes.container}>
      <BsChevronLeft
        onClick={left}
        style={{
          position: "absolute",
          left: "0",
          margin: "auto",
          top: "50%",
          zIndex: "0",
          width: "25px",
          height: "25px",
          background: "white",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
          marginLeft: "10px",
          borderRadius: "50%",
          padding: "5px",
          color: "gray",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
      <BsChevronRight
        onClick={right}
        style={{
          position: "absolute",
          right: "0",
          margin: "auto",
          top: "50%",
          zIndex: "0",
          width: "25px",
          height: "25px",
          cursor: "pointer",
          background: "white",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
          marginRight: "10px",
          borderRadius: "50%",
          padding: "5px",
          color: "gray",
          alignItems: "center",
          justifyContent: "center",
        }}
      />

      <div className={classes.title}>
        <div className={classes.top}>
          <span>{title}</span>
        </div>{" "}
        <div>
          <button>View More</button>
        </div>{" "}
      </div>
      <span className={classes.divider}></span>

      <div className={classes.content}>
        <>
          {!IsLoad && (
            <CircularProgress
              style={{ width: "200px", height: "200px", opacity: "0.6" }}
            />
          )}
          {IsLoad &&
            product.map((item) => (
              <Product
                key={item.id}
                brandName={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
                arrow={leftArrow}
                right={rightArrow}
                id={item.id}
              />
            ))}
        </>
      </div>
    </div>
  );
};
