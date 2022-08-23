import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

export const Desktop = () => {
  return (
    <div>
      <h1>desktop</h1>
      <Grid templateColumns="300px 500px 300px" gap={0}>
        <GridItem w="100%" h="100%" bg="red">
          desktop
        </GridItem>

        <GridItem w="100%" h="100%" bg="green">
          Nav
        </GridItem>
        <GridItem w="100%" h="100%" bg="blue">
          Widget
        </GridItem>
      </Grid>
    </div>
  );
};
