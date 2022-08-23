import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterComponents } from '../components/FilterComponents'
import { fetchData } from '../Redux/products/action'

export const Products = () => {
  const products= useSelector((store)=>store.ecommerceData.products) 
  console.log(products)
  // const dispatch= useDispatch()
  // useEffect(()=>{
  //   if(products?.length==0){
  //     dispatch(fetchData())
  //   }
  // })
  return (
      <Box>
       <Box><FilterComponents/></Box>
       <Box>

       </Box>
   </Box>
  )
}
