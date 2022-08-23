// reusable card component
const GroceryItem = ({ item }) => {
  const { discount, imgURL, mrp, sellingPrice, title } = item;
  return (
    <div className="grocery">
      <div className="upper">
        <p>{discount}</p>
        <img src={imgURL} alt="" />
      </div>
      <p>{title}</p>
      <div className="price-div">
        <div style={{display: 'flex'}}>
          <p>{sellingPrice}</p>
          <p> M.R.P. ₹</p>
        </div>
        <s>{mrp}</s>
      </div>
    </div>
  );
};
export default GroceryItem;
