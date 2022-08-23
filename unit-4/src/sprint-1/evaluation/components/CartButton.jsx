import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
  //manage state of the count
  const [count, setCount] = useState(0);
  return (
    <>
      {/* add to cart button */}
      {/* count with - and  + button */}
      <div id="btn">
        {count > 0 ? (
          <>
            <button
              className="dec"
              onClick={() => setCount((prevCount) => prevCount - 1)}
            >
              -
            </button>
            <p className="count-item">{count}</p>
            <button
              className="inc"
              onClick={() => setCount((prevCount) => prevCount + 1)}
            >
              +
            </button>
          </>
        ) : (
          <p
            onClick={() => setCount((prevCount) => prevCount + 1)}
            className="addToCart"
          >
            Add To cart
          </p>
        )}
      </div>
    </>
  );
};
export default CartButton;
