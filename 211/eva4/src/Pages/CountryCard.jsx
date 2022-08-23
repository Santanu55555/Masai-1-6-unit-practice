import {Td,Tr,Button} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
import * as types from "../Redux/actionTypes"
import { useDispatch } from "react-redux";
import axios from 'axios'
export const CountryCard = ({id,country,city,population}) => {
    let navigate=useNavigate()
   
  // const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const EditStatus = (id,newStatus) => {
//       dispatch ({type:types.DELETE_COUNTRY_REQUEST})
//       axios.delete(`http://localhost:8080/countries/${id}`,{status:newStatus})
//       .then(r => dispatch({type:types.DELETE_COUNTRY_SUCCESS,payload:r.data}))
//       .catch(e => dispatch({type:types.DELETE_COUNTRY_FAILURE}))
//   }
  
    return (
      <Tr>
        <Td>
          <Td   >{city} </Td>
        </Td>
        <Td>
          <Td >{country}</Td>
          <Td >{population}</Td>
        </Td>
        <Button ><RouterLink to={`/country/:${id}`} >Edit</RouterLink></Button>
        <Button>Delete</Button>
      </Tr>
    );
  };
  