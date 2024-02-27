import { useState } from "react";
import AddToCartIcon from "../../../Assets/add_cart.svg"
const ListItem = ({ data }) => {
  const [counter, setCounter] = useState(0);

  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  };

  const decreaseCounterByOne = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };
  return (
    <div className={"item-card"}>
      <img className={"img-fluid"} alt={data.title} />
      <div className={"item-card__information"}>
        <div className={"pricing"}>
          <span>₹{data.discountedPrice}</span>
          <small>
            <strike>₹{data.price}</strike>
          </small>
        </div>
        <div className={"title"}>
          <h3>{data.title}</h3>
        </div>
      </div>
      {counter < 1 ? (
        <button className={"cart-add"} onClick={increaseCounterByOne}>
          <span>Add to Cart</span>
          <img alt="Cart Icon" src={AddToCartIcon}/>
        </button>
      ) : (
        <div className="cart-addon">
          <button onClick={decreaseCounterByOne}>
            <span>-</span>
          </button>
          <span>{counter}</span>
          <button onClick={increaseCounterByOne}>
            <span>+</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
