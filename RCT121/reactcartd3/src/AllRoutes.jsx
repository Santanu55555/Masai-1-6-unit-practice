import React from 'react'
import { Route, Routes } from 'react-router'
import Home from "./Pages/Home"
import Products from './Pages/Products'
import Mobile from './Pages/Mobile'
import Watch from './Pages/Watch'
import Cart from './Pages/Cart'
import Register from './Pages/Register'
import Laptop from "./Pages/Laptop"
import AddProduct from './Pages/AddProduct'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/mobile" element={<Mobile />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/watch" element={<Watch />} />
            <Route path="/shoppingcart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
    </div>
  )
}

export default AllRoutes