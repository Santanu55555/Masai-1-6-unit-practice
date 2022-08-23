import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export const Navbar=()=>{
    const {theme}= useContext(ThemeContext)
    return(
        <>
        <nav style={{ background: theme===true? "black":"white",color:theme===true? "white":"black" }}>
            <div>
                <a href="#">Navbar</a>
            </div>
        </nav>
        </>
    )
}