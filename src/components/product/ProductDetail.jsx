import { useState, useEffect } from "react";
import classes from "./ProductDetail.module.css";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import { MdStarRate } from "react-icons/md";
import { useParams } from "react-router-dom";
import { cartAction } from "../../store/slice/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

export const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [rating, setRating] = useState();
  const [isLoad, setIsLoad] = useState(false);
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [getData, setGetData] = useState({});
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { id } = useParams();

  const addQuantityHandler = () => {
    setQuantity((prev) => {
      return prev * 1 + 1;
    });
  };

  const removeQuantityHandler = () => {
    setQuantity((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else return 0;
    });
  };

  const addDataToCart = (event) => {
    event.preventDefault();
    dispatch(
      cartAction.addItemFromCart({
        id: product.id,
        title: product.title,
        quantity: quantity,
        price: product.price,
        totalPrice: quantity * product.price,
      })
    );
  };

  const getProduct = async () => {
    setIsLoad(false);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        const { rate } = data.rating;
        const { count } = data.rating;
        setRating(rate);
        setCount(count);
        setGetData(data);
        setIsLoad(true);
      });
  };
  useEffect(() => {
    getProduct();
    return () => {};
  }, []);

  return (
    <>
      {!isLoad && (
        <div className={classes.left}>
          {" "}
          <div className={classes.container}>
            <CircularProgress
              style={{ width: "200px", height: "200px", opacity: "0.6" }}
            />
          </div>
        </div>
      )}
      {isLoad && (
        <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes.image}>
              <img src={product.image} alt="" />
            </div>
          </div>
          <div className={classes.right}>
            <form onSubmit={addDataToCart} defaultValue="">
              <div className={classes.review}>
                <span>{product.title}</span>
                <span>
                  {[1, 2, 3, 4, 5].map((rate, index) => (
                    <MdStarRate
                      cursor="pointer"
                      key={index}
                      color={rate > 0 ? "red" : "gray"}
                    />
                  ))}{" "}
                  <span>{rating}</span> {count} reviews
                </span>
              </div>
              <div className={classes.seller}>
                <span className={classes.title}>
                  <span>
                    <span>Sold by:</span>
                    Kelvin Moses
                  </span>
                  <div>
                    <button>Message Seller</button>
                    Adidas
                  </div>
                </span>
              </div>
              <div className={classes.price_info}>
                <div className={classes.price}>
                  <span>Price:</span>
                  <span>${Math.round(product.price * quantity)}/pc</span>
                </div>
                <div className={classes.discount}>
                  <span>Discount Price:</span>
                  <span>
                    ${((product.price - 5) * quantity).toFixed(2)}{" "}
                    <span>/pc</span>
                  </span>
                </div>
                <div className={classes.point}>
                  <span className={classes.title}>Club Point:</span>
                  <span>{count}</span>
                </div>
              </div>
              <div className={classes.quantity_info}>
                <div className={classes.quantity}>
                  Quantity:
                  <span>
                    {" "}
                    <button onClick={addQuantityHandler}>+</button>{" "}
                    <input type="text" value={quantity} minLength="1" min="1" />{" "}
                    <button onClick={removeQuantityHandler}>-</button>
                  </span>
                </div>
              </div>
              <div className={classes.cart}>
                <button onClick={addDataToCart}>
                  <span>
                    <AiOutlineShoppingCart size="20px" color="red" />
                  </span>{" "}
                  Add to Cart
                </button>
                <button>
                  <span>
                    <AiOutlineShopping size="20px" color="white" />
                  </span>{" "}
                  Buy Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
