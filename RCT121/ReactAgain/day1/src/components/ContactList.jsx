import { useState } from "react"
import { AddContact } from "./AddContact";
import { ContactCard } from "./contactCard";


const initial =[{
    id:1,
    first_name:"amir",
   
    phone:"7008467376"
},
{
    id:2,
    first_name:"akbar",
   
    phone:"9999684932"
},
{
    id:3,
    first_name:"anthony",
   
    phone:"8696969696"
}
]

 export const ContactList = ()=>{
  
      const [contactlist,setContactlist]=useState(initial)
      const handleclick =(name,phone)=>{
          console.log("name",name)

         setContactlist([
             ...contactlist,
             {
                 id:contactlist[contactlist.length-1].id+1,
                 first_name:name,
                 last_name:"",
                 phone:phone
                }

         ]);
      };
      const deletebyId=(id)=>{
            setContactlist(contactlist.filter((e)=>e.id!==id))
      }
      console.log('uhu8',contactlist)

      return(
          <div>
             
              <h1>Contact list</h1>
            
              <AddContact handleclick={handleclick}/>
              <br/>
              {contactlist.map((e)=>
               
                
            
                   <div key={e.id}>
                        
                        <ContactCard
                        id={e.id}
                         first_name={e.first_name}
                         phone={e.phone}
                         onDelete={deletebyId}
                         
                 
                   ></ContactCard>
                   </div>
                 
              )}
          </div>
      )
  
}