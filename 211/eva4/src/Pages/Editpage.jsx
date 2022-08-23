import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React,{ useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigate,useParams,Link} from "react-router-dom"
import axios from "axios"
import * as types from "../Redux/actionTypes"
import { getData } from "../Redux/reducer";
export const Editpage = () => {
   
  const {id}=useParams()
  // const navigate = useNavigate()
    const dispatch = useDispatch()
    const EditStatus = (id,newStatus) => {
      dispatch ({type:types.UPDATE_COUNTRY_REQUEST})
      axios.patch(`http://localhost:8080/countries/${id}`,{status:newStatus})
      .then(r => dispatch({type:types.UPDATE_COUNTRY_SUCCESS,payload:r.data}))
      .catch(e => dispatch({type:types.UPDATE_COUNTRY_FAILURE}))
  }
  
  

  return (
    <Box>
      <Heading>Edit Page</Heading>
      <Box>
        <Text>Capital City</Text>
        <Input data-cy="capital-city" />
      </Box>
      <Box>
        <Text>Population</Text>
        <Input data-cy="population" />
      </Box>
      <Button data-cy="update-button" onClick={()=>EditStatus(id)}>Update</Button>
    </Box>
  );
};

export default Editpage;
