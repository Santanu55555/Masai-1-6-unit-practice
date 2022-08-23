
import React from "react";

const CartButton = () => {

  const [count, setCount] = React.useState(0);
 
  const handleBtn = () => {
    setCount(1);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        {count === 0 ? (
          <button className="addcart" onClick={handleBtn}>
            Add to Cart
          </button>
        ) : (
          <div className="btn-div" style={{ display: "flex" }}>
            <button className="btn" onClick={() => setCount(count - 1)}>
              -
            </button>
            <p className="count-item">{count}</p>
            <button className="btn" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
};
export default CartButton;
