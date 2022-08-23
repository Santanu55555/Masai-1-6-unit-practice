import { useState } from "react"


 export const AddContact = (props)=>{
    const [text ,setText] = useState("")
    const [phone,setPhone] = useState("")
    const [isState,setisState]=useState(false)

      
   const handleclick = ()=>{
    if(props.handleclick) props.handleclick(text,phone);
    setText("")
    setPhone("")
    console.log(phone)
   }
return (
    <div>
        <div>
            <input placeholder="Add Name"
            value={text}
            onChange={(e)=>{setText(e.target.value)}}/>
        </div>
        <div>
            <input   placeholder="Add Phone"
            value={phone}
            onChange={(e)=>{setPhone(e.target.value)}}/>
          
        </div>
        <div><button onClick={handleclick}> ADD</button></div>
    </div>
)
    
}


