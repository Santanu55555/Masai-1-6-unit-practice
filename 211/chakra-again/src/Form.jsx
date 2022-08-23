import { Box, Button, Container, Heading, HStack, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { PinInput, PinInputField } from '@chakra-ui/react'
export const Form = () => {
    const [isLoading,setIsLoading]=useState(false)
    const[otp,setOtp]=useState("");
    const BoxStyle={
      border: "1px solid red"
    }
  return (
    <Box ><Heading>Form</Heading>
      <Stack gap={2}>
      <Container >
    <Container><Input type="email" placeholder="email"/></Container>
    <Container><Input type="password" placeholder="password"/></Container>
   <Container>
   <HStack>
  <PinInput placeholder='🥳'value={otp} onChange={(value)=>setOtp(value)}>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
<Container {...BoxStyle}>{otp}
<Box/>
<Box/>
<Box/>
</Container>
   </Container>
    <Container><Button bg={"Primary.color1"} onClick={()=>{
        setIsLoading(true)
        setTimeout(()=>{
          setIsLoading(false)
        },500)
        
    }} isLoading={isLoading}>Sign up</Button></Container>
    </Container>
      </Stack>
    </Box>

  )
}
