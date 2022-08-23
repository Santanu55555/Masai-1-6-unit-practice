import {useContest} from 'react'
import { ThemeContext } from "../contexts/themeContext"

export const Theme=()=>{
    const {handleChange}=useContest(ThemeContext)
    return (
        <div>
            <button onClick={handleChange()}>Click me to change Theme</button>
        </div>
    )
}
