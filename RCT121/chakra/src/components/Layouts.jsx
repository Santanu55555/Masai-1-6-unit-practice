import React from "react";
import { Box } from "@chakra-ui/layout";
import { Stack, HStack, VStack } from "@chakra-ui/react";

export const Layouts = () => {
  return (
    <div>
      <Stack direction={["column", "row"]} spacing="24px">
        <Box w="100%" h="40px" bg="red">
          1
        </Box>
        <Box w="100%" h="40px" bg="black">
          2
        </Box>
        <Box w="100%" h="40px" bg="blue">
          3
        </Box>
      </Stack>
    </div>
  );
};
