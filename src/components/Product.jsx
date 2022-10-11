import classes from "./Product.module.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import { FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Product = ({ brandName, price, image, rating, arrow, id }) => {
  const { rate, count } = rating;
  return (
    <div>
      <div className={classes.container} style={{ left: `${arrow}%` }}>
        <Link to={`/product/${id}`}>
          <div className={classes.product}>
            <div className={classes.image}>
              <div>
                <span>
                  <AiOutlineHeart color="gray" size="15px" />
                </span>
                <span>
                  <FiRefreshCw color="gray" size="15px" />
                </span>
                <span>
                  <AiOutlineShoppingCart color="gray" size="15px" />
                </span>
              </div>
              <img src={image} alt="" />
            </div>
            <div className={classes.detail}>
              <span className={classes.price}>$ {price}</span>
              <span className={""}>
                {brandName.length > 15 && brandName.slice(0, 15)}{" "}
              </span>
              <span className={classes.rating}>
                Rate{" "}
                {[1, 2, 3, 4, 5].map((el, index) => {
                  return <MdStarRate color={index < rate ? "red" : "gray"} />;
                })}
                /{count}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
