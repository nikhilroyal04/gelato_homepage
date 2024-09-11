import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";

export default function Part1() {
  const starImage = "https://www.gelato.com/assets/rating-stars/star.svg"; 
  const totalStars = 5; 
  return (
    <Box py={10}>
      <Box maxW="80vw" mx="auto" borderRadius="lg" p={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side: Heading and Text */}
          <Stack
            spacing={5}
            align={{ base: "center", md: "start" }}
            flex="1"
            order={{ base: 2, md: 1 }}
          >
            <Heading
              as="h1"
              size="2xl"
              textAlign={{ base: "center", md: "left" }}
              display={{ base: "none", md: "block" }} 
            >
              Create, <br />
              customize, and <br /> sell your own <br />
              products
            </Heading>
            <Heading
              as="h1"
              size="xl"
              textAlign={{ base: "center", md: "left" }}
              display={{ base: "block", md: "none" }} 
            >
              Print on demand for your ecommerce business
            </Heading>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textAlign={{ base: "center", md: "left" }}
            >
              Sign up for free and only pay for what you sell
            </Text>
            <Text fontSize="md" textAlign={{ base: "center", md: "left" }}>
              Turn your passion into profit with the world's largest print on
              demand network.
            </Text>

            {/* Buttons */}
            <Stack direction={{ base: "column", sm: "row" }} spacing={4} mb={2}>
              <Button
                color="white"
                bg="black"
                size="md"
                borderRadius="50px"
                _hover={{
                  color: "#bbbbbb",
                }}
              >
                Get started for free
              </Button>
              <Button
                color="black"
                variant="outlined"
                border=" 1px solid black"
                size="md"
                borderRadius="50px"
                _hover={{
                  bg: "#e2e2e2",
                }}
              >
                See our products
              </Button>
            </Stack>

            {/* Additional Text */}
            <Image
              src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg" // Replace with your image URL
              alt="Shopify"
              borderRadius="lg"
              maxHeight={45}
              objectFit="cover"
            />
            <Stack direction="row" align="center" spacing={1}>
              {Array.from({ length: totalStars }).map((_, index) => (
                <Image
                  key={index}
                  src={starImage}
                  alt={`Star ${index + 1}`}
                  borderRadius="lg"
                  maxHeight={5}
                  height={5}
                  objectFit="cover"
                />
              ))}
              <Text fontWeight="bold">4.8/5</Text>
            </Stack>
            <Text>based on 875 reviews</Text>
          </Stack>

          {/* Right Side: Image */}
          <Box
            flex="1"
            mt={{ base: 8, md: 0 }}
            order={{ base: 1, md: 2 }} 
          >
            <Image
              src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/" 
              alt="Your product showcase"
              borderRadius="lg"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
      {/* Call to Action */}
      <Box py={8} bg="#fef4ff">
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={10}
          mt={1}
          maxW="80vw"
          mx="auto"
          textAlign="center"
        >
          <Text fontSize="30px">
            90% <br />
            of all orders are <br /> produced locally
          </Text>
          <Text fontSize="30px">
            90% <br />
            of orders arrive within 5 days of ordering
          </Text>
          <Text fontSize="30px">
            140+ <br />
            print providers across <br /> 32 countries
          </Text>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
