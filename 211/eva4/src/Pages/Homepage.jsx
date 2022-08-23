import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,Button,
  Thead,
  Tr,Td
} from "@chakra-ui/react";
import React,{useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/reducer";
import { useCallback } from 'react';
import { CountryCard } from "./CountryCard";
const Homepage = () => {
  const countries=useSelector((state)=>state.countries)
  const [value, setValue] = useState('default')
  // console.log(value)
  const dispatch=useDispatch()
  
  // console.log(countries)
  // countries.sort((a,b)=>
  // {return a.population-b.population
  // }) 
  // console.log(countries)
  const  san=()=>{
    countries.sort((a,b)=>
     {return a.population-b.population
     })
    //  dispatch(getData())
    //  console.log(countries)
     
   
    
  }
  // let a=san()

  // let b=tanu()
  const tanu=()=>{
    countries.sort((a,b)=>
     {return b.population-a.population
     })
     
    //  dispatch(getData())



    //  console.log(countries)
   
  }
 
  useEffect(()=>{
    dispatch(getData())
  },[])
   if(value=="asc"){
     san()
  }
  else if(value=="desc"){
    tanu()
   }

   useEffect(() => {
    setValue((window.localStorage.getItem("value")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("value", value);
  }, [value]);
  return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc" >
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */
            countries?.length>0 && countries.map((item)=>{
              return (
                <Tr key={item.id}>
                    <CountryCard {...item}/>
                 
                </Tr>
              )
            })
            }

          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
// export const Homepagememo=React.useMemo(Homepage)