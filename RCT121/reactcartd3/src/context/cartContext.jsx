import { createContext, useState } from "react";

export const CartContext=createContext()

export const CartContextProvider=({children})=>{
    const [quantity,setQuantity]=useState(0)
    const [cartData,setCartData]=useState([])
    

    const addToCart=(item)=>{
        setCartData([
            ...cartData,
            item]
        )
        setQuantity(quantity+1)
    }

    return(
        <CartContext.Provider value={{quantity,cartData,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}