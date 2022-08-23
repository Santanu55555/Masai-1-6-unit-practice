const GroceryItem = ({ item }) => {
  const { imgURL, mrp, sellingPrice, title } = item;
  return (
    <div className="grocery">
      <div className="upper">
        <img src={imgURL} alt="" />
      </div>
      <p>{title}</p>
      <div className="price-div">
        <div style={{ display: "flex" }}>
          <p>{sellingPrice}</p>
          <p style={{ marginRight: "20px"}}> M.R.P. ₹</p>
        </div>
            <s>{mrp}</s>
      </div>
    </div>
  );
};
export default GroceryItem;
