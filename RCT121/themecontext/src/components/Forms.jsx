import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const Forms=()=>{
    const {theme}=useContext(ThemeContext)
    return (
         <div style={{maxWidth:"40%", margin:"auto", border:"1px solid teal",padding:"5px",background: theme===true? "black":"white",color: theme===true? "white":"black"}}>
      <form>
        <div >
          <label htmlFor="exampleInputEmail1" >
            Email address
          </label>
          <input
            type="email"
            
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" >
            We'll never share your email with anyone else.
          </div>
        </div>
        <div >
          <label htmlFor="exampleInputPassword1" >
            Password
          </label>
          <input
            type="password"
            
            id="exampleInputPassword1"
          />
        </div>
        <div >
          <input
            type="checkbox"
           
            id="exampleCheck1"
          />
          <label htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" >
          Submit
        </button>
      </form>
    </div>
    )
}