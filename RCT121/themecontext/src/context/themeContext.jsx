import { createContext, useState } from "react";


export const ThemeContext= createContext()

export const ThemeContextProvider = ({ children})=>{

const [theme,setTheme]=useState(true)

const handleChange=()=>{
    setTheme(!theme)
}

return(
    <ThemeContext.Provider value={{theme,handleChange}}>
        {children}
    </ThemeContext.Provider>
)

}
