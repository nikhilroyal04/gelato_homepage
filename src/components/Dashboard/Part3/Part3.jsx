import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  Button,
} from "@chakra-ui/react";

export default function Part3() {
  return (
    <>
      <Box py={10} px={4} mx="auto" maxW="80vw">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
        >
          {/* Left Side: Image */}
          <Box
            flex="1"
            mb={{ base: 8, md: 0 }}
            mr={{ md: 14 }}
            width={{ base: "100%", md: "50%" }}
            order={{ base: 1, md: 1 }} 
          >
            <Image
              src="https://a.storyblok.com/f/165154/1080x1080/6120ad9f16/helatoconnect-lp-hero-gif-updated_2-compressed.gif/m/"
              alt="Why choose us?"
              borderRadius="md"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>

          {/* Right Side: Content */}
          <Stack
            spacing={5}
            align={{ base: "center", md: "start" }}
            flex="1"
            order={{ base: 1, md: 2 }} 
          >
            <Text fontSize="xl">For print producers</Text>
            <Heading
              as="h1"
              size="2xl"
              textAlign={{ base: "center", md: "left" }}
            >
              GelatoConnect
            </Heading>
            <Text fontSize="2xl" textAlign={{ base: "center", md: "left" }}>
              Elevate efficiency, cut costs, and <br /> seamlessly automate with
              our all-in-one <br /> software solution for the print industry
            </Text>

            <Button
              color="white"
              bg="black"
              size="md"
              borderRadius="50px"
              _hover={{
                color: "#bbbbbb",
              }}
            >
              Learn more
            </Button>
          </Stack>
        </Flex>
      </Box>

      <Box maxW="100vw" mx="auto" borderRadius="lg" p={8} bg="#fef4ff">
        <Flex
          direction={{ base: "column", md: "row" }}
          maxW="75vw"
          mx="auto"
          alignItems="center"
          mt={5}
          justifyContent="space-between"
        >
          {/* Left Side: Heading and Text */}
          <Stack
            spacing={5}
            align={{ base: "center", md: "start" }}
            flex="1"
            mb={3}
            order={{ base: 2, md: 1 }} 
          >
            <Heading
              as="h1"
              mb={2}
              size="3xl"
              textAlign={{ base: "center", md: "left" }}
            >
              Meet <br /> GelatoConnect <br /> at Printing <br /> United
            </Heading>
            <Text fontSize="lg" textAlign={{ base: "center", md: "left" }}>
              Meet us at Printing United from September 10-12 in Las Vegas.{" "}
              <br /> Book your meeting slot to discover the innovative ways{" "}
              <br />
              GelatoConnect is transforming the landscape and driving <br />{" "}
              success for businesses like yours.
            </Text>

            <Button
              color="white"
              bg="black"
              size="md"
              mb={2}
              borderRadius="50px"
              _hover={{
                color: "#bbbbbb",
              }}
            >
              Book a meeting
            </Button>
          </Stack>

          {/* Right Side: Image */}
          <Box
            flex="1"
            mt={{ base: 8, md: 0 }}
            order={{ base: 1, md: 2 }} 
          >
            <Image
              src="https://a.storyblok.com/f/165154/1280x720/5d47159829/gelato-printing-united-2024.png/m/1000x0/" 
              alt="Your product showcase"
              borderRadius="lg"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
