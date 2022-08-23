import { useContext } from "react"
import style from "./Button.module.css"
import {AppContext} from "../AppContext/AppContextProvider"

function Button({text,onClick}){
    const [theme,setTheme]=useContext(AppContext)


    return (
        <button className={`${style.buttonBase} ${theme==="Light"? style.buttonLight:style.buttonDark}`}>{text}</button>
   
   
        )
}