import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
    
      <Routes>
        <Route path="banda" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="aboutus" element={<About />} />
        <Route path="FAQ" element={<FAQ />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
    
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
