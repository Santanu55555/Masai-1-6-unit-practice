import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import CartButton from "./CartButton"

const GroceryDetails = ()=>{
console.log(data)
console.log("hii")
    return(
        <>
        <h1 className="head">Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
           {data.map((item)=>(
          <div>
              <GroceryItem item={item}/>
              <CartButton/>

          </div>
           ))}
               
        </div>
        </>
    )
}
export default GroceryDetails