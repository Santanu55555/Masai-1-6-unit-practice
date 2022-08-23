import { Box, SimpleGrid, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const LayOut = () => {
    const items= new Array(12).fill(0).map((a,i)=>i+1)
    const {colorMode, toggleColorMode}=useColorMode()
  return (
    <Box>
        <Box onClick={toggleColorMode} bg={useColorModeValue("blue.100","red.800")}>
            {
                colorMode==="light"?<Box>Dark</Box>:<Box>Light</Box>
            }
        </Box>
      <SimpleGrid columns={{base:2,sm:2,md:3,lg:4,xl:5,"2xl":6}}>
      {
            items.map((index,item)=>{
                return   <Box key={item}>{index}</Box>
                
            })
        }
      </SimpleGrid>
    </Box>
  )
}
