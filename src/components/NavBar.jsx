import { FiRefreshCw } from "react-icons/fi";
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Modal from "./ui/Modal";

export const NavBar = () => {
  const cart = useSelector((state) => state.cart.totalQuantity);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);

  return (
    <div className={classes.container}>
      <Link to="/">
        <div className={classes.logo_wrapper}>
          <img src="../../assets/logo.png" alt="" />
        </div>
      </Link>
      <div className={classes.search_container}>
        <span className={classes.search}>
          <input type="text" placeholder="I am shopping for..." />
          <span>
            <AiOutlineSearch color="white" size="30px" />
          </span>
        </span>
      </div>
      <div className={classes.right_container}>
        <div className={classes.menu_items}>
          <span>
            <FiRefreshCw color="gray" size="30px" />
          </span>
          <div>
            <span>0</span>Compare
          </div>
        </div>
        <div className={classes.menu_items}>
          <span>
            <AiOutlineHeart color="gray" size="30px" />
          </span>
          <div>
            <span>0</span>Wishlist
          </div>
        </div>
        <div className={classes.menu_items}>
          <span>
            <AiOutlineShoppingCart color="gray" size="30px" />
          </span>

          <div>
            <span>{cart}</span>Cart
          </div>
        </div>
        <div
          style={{
            width: "100px",
            top: "50px",
            height: "auto",
            position: "absolute",
            right: "0",
          }}
        >
          {/* {cartItems.map((el) => (
            <ul>
              <li>{el}</li>
            </ul>
          ))} */}
        </div>
      </div>
    </div>
  );
};
