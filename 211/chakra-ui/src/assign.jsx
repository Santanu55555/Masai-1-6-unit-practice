import { Box, Center, extendTheme, Flex, Square, Text } from '@chakra-ui/react'
import React from 'react'

export const Assign1 = () => {
    const breakpoints = {
        sm: '320px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1536px',
      }
      const theme=extendTheme({breakpoints})
  return (
    <Box bg='black' margin='auto' color='white' textAlign='center' w={[300,500,800]}>Assign1
    <Text  margin='auto'fontSize={{base:"10px",sm:"14px",md:"16px",lg:"20px"}}w={[1,1/2,1/3]} bg='white' color='black'>Me hu text</Text>
    <Flex color='white'>
  <Center w='100px' bg='green.500'>
    <Text>Box 1</Text>
  </Center>
  <Square bg='blue.500' size='150px'>
    <Text>Box 2</Text>
  </Square>
  <Box flex='1' bg='tomato'>
    <Text>Box 3</Text>
  </Box>
</Flex>
<Flex>
  <Box p='4' bg='red.400'>
    Box 1
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
    Box 2
  </Box>
</Flex>
    </Box>
  )
}
