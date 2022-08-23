import { useState } from "react"

 export const ContactCard=({id,first_name,phone,onDelete})=>{
     console.log(phone,"phone",first_name)
     const [s,setS] = useState(true)
     const handleShow = ()=>{
         s?setS(false):setS(true);
     }
  return (
      <div
      style={{
          display:"flex",
          padding:"1rem",
          border:"1px solid red",
          marginBottom:"0.25rem",
          gap:"1rem"
      }}>
          <div>
             
               {first_name + s? id+" . "+ phone : ""}
          </div>
          <button onClick={()=>{onDelete(id)}}>Delete</button>
          <button onClick={handleShow}>{s?"Hide":"Show"}</button>
          
      </div>
  )
}