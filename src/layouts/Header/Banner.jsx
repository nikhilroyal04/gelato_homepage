import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const Banner = () => {
  return (
    <Box
      id="banner"
      bg="black"
      color="white"
      textDecoration="underline"
      p={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      position="sticky"
      top={0}
      zIndex={900} 
    >
      <Text fontSize="sm" mr={2}>
        FREE SHIPPING for orders over $300. Order today
      </Text>
      <Icon as={InfoIcon} ml={2} />
    </Box>
  );
};

export default Banner;
