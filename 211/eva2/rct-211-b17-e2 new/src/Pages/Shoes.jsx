import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import {
  getShoes,
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../Redux/AppReducer/action";
import axios from "axios";
import { Link } from "react-router-dom";
import * as types from "../Redux/AppReducer/actionTypes";
import SingleShoe from "./SingleShoe";
const Shoes = () => {
  const shoes = useSelector((state) => state.shoes);

  const dispatch = useDispatch();

  //   const getShoes=()=>(type,dispatch)=>{
  //     dispatch({type:types.GET_SHOES_DATA_REQUEST});
  //     axios({
  //         url:"http://localhost:8080/shoes",
  //         method:"GET"
  //     })
  //     .then((r)=>dispatch(getShoesSuccess(r.data))).catch((e)=>dispatch({type:types.GET_SHOES_DATA_FAILURE , payload: e}))

  // }
  // const getShoes=()=>{
  //   dispatch(getShoesRequest());
  //   axios.get('http://localhost:8080//shoes')
  //   .then(r=>dispatch(getShoesSuccess(r.data)))
  //   .catch(e=>dispatch(getShoesFailure()))
  // };

  useEffect(() => {
    if (shoes.length === 0) {
      dispatch(getShoes());
    }
  }, []);
  // console.log(shoes)
  // const { dataPresent } = getShoes();

  const handleClick = (item) => {
    <div>
      {" "}
      <Link to="/shoes/:id">
        <SingleShoe {...item} />
      </Link>
    </div>;
  };

  return (
    <div style={{ display: "flex" }}>
      <Filter />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {/* Map through the shoes list here using ShoeCard Component */}
        {shoes?.length > 0 &&
          shoes.map((item) => {
            return (
              <div key={item.id}>
                <Link to="/">
                  <ShoeCard onClick={handleClick(item.id)} {...item} />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Shoes;
