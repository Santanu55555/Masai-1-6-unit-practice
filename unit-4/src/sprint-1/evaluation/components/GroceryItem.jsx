import CartButton from "./CartButton";

// reusable card component
const GroceryItem = ({ title, imgURL, mrp, sellingPrice, discount }) => {
  return (
    <>
      <div id="grocItem">
        <div className="border">
          <p className="discount">{discount}</p>
          <img src={imgURL} alt="image" />
          <h4>{title}</h4>
          <div className="price">
            <h4>{sellingPrice}</h4>
            <p>
              M.R.P: <span>{mrp}</span>
            </p>
          </div>
        </div>
        <CartButton />
      </div>
    </>
  );
};
export default GroceryItem;
