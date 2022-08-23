import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { Form } from './Form';
import { LayOut } from './LayOut';

function App() {
  return (
   <Box>
    {/* <Form/> */}
    <LayOut/>
   </Box>
  );
}

export default App;
