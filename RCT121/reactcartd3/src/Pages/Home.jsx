import React from 'react'
import styled from "styled-components"
import AddPro from './AddProduct'
import Products from "./Products"
const Container=styled.div`

  width: 95%;
  margin: auto;
`
const Home = () => {
  return (

    <Container>
     
    <Products />
    </Container>
  )
}

export default Home