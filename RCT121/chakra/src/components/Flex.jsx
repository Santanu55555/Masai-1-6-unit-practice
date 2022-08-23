import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export const DesktopFlex = () => {
  return (
    <div>
      <h1>Mobile</h1>

      <Grid templateColumns="300px,500px,300px" gap={0}>
        <GridItem w="30%" h="100" bg="red.500">
          desktop
        </GridItem>

        <GridItem w="30%" h="100" bg="green.500">
          Nav
        </GridItem>
        <GridItem w="30%" h="100" bg="blue.500">
          Widget
        </GridItem>
      </Grid>
    </div>
  );
};
