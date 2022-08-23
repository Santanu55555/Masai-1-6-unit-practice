import { useState } from "react";
import Axios from "axios";
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react";
import styled from "styled-components";
import { Header, Appname, Search } from "./Component/Header";
import {List,Listcontainer,CoverImage,CoverName,Ingred,SeeMore} from "./Component/Recipecomponent"
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Recipecomponent=(props)=>{
  const [show,setshow]=React.useState(false)
  const {recipeobj}=props;
  return(
    <>
    <Dialog open={show}>

    </Dialog>
    <Listcontainer>
 <CoverImage src={recipeobj.image} />
          <CoverName>{recipeobj.label}</CoverName>
          {/* <Ingred onClick={()=>setshow(true)}>Ingredients</Ingred> */}
          <SeeMore onClick={()=>window.open(recipeobj.url)}> See Complete Recipe</SeeMore> 
             </Listcontainer>
             </>
  );
}

const key="865f77e988a11b2c1aaba14a2f04f15f	"
const id="b51c2cda"
export default function App() {
  const [timeoutid,settimeoutid]=useState();
  const [recipelist,setrecipelist]=useState([]);
  const fetch =async (searchstring)=>{
    const response=await Axios.get(`https://api.edamam.com/search?q=${searchstring}&app_id=${id}&app_key=${key}`);
      // handle success
      console.log(response);
  setrecipelist(response.data.hits)
  }

  const ontextchange=(event)=>{
   clearTimeout(timeoutid)
   const timeout=setTimeout(()=> fetch(event.target.value),500)
   settimeoutid(timeout)

  }
  return (
    <Container>
      <Header>
        <Appname>🍟🍔Chhavi Recipe Finder🍟🍗</Appname>
        <Search>
          <input type="text" placeholder="enter your recipe name " onChange={ontextchange}></input>
        </Search>
      </Header>
    <Listcontainer>
      {recipelist.length &&
      recipelist.map((recipeobj) =>(
        <Recipecomponent recipeobj={recipeobj.recipe}></Recipecomponent>
      ))}
   
    </Listcontainer>
      


     
    
    </Container>
  );
}
