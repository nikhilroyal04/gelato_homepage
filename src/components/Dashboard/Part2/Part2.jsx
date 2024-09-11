import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Image,
  useBreakpointValue,
  Button,
} from "@chakra-ui/react";

const content = [
  {
    title: "World's largest print-on-demand network",
    description:
      "140+ print partners in 32 countries. Gelato is a truly global service.",
  },
  {
    title: "Sell globally, produce locally",
    description:
      "Your products are produced close to your customers, wherever they are.",
  },
  {
    title: "100% free editing tools",
    description: "Create your custom products using our suite of free tools.",
  },
  {
    title: "60+ logistics partners",
    description:
      "Our global network of logistics partners ensures your products are delivered fast.",
  },
  {
    title: "High-quality products",
    description:
      "We partner with the world's leading brands to ensure the best quality products.",
  },
  {
    title: "Endless creativity with Shutterstock Images",
    description:
      "Access millions of images and graphics to create unique products you can sell in your store.",
  },
  {
    title: "1-click integration to the leading e-commerce platforms",
    description:
      "Connect your store to Gelato using our integrations with Shopify, Etsy and more.",
  },
];

export default function Part2() {
  const containerWidth = useBreakpointValue({ base: "90vw", md: "80vw" });

  return (
    <>
      <Box py={10} px={4} mx="auto" maxW={containerWidth}>
        <Heading as="h2" size="2xl" mb={10} textAlign="center">
          Why Choose Gelato
        </Heading>

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
              src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
              alt="Why choose us?"
              borderRadius="md"
              objectFit="cover"
              width="100%"
              height="auto"
            />
          </Box>

          {/* Right Side: Content */}
          <Box
            flex="1"
            width={{ base: "100%", md: "50%" }}
            order={{ base: 1, md: 2 }} 
          >
            <Stack spacing={4}>
              {content.map((item, index) => (
                <Box key={index}>
                  <Text fontWeight="bold" fontSize="2xl">
                    ▻ {item.title}
                  </Text>
                  <Text mt={2}>{item.description}</Text>
                </Box>
              ))}
            </Stack>
          </Box>
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
            order={{ base: 2, md: 1 }}
          >
            <Text fontSize="xl">For print on demand sellers</Text>
            <Heading
              as="h1"
              size="3xl"
              textAlign={{ base: "center", md: "left" }}
            >
              Accelerate <br /> business growth <br /> with innovative <br />{" "}
              design tools and <br /> apps
            </Heading>
            <Text fontSize="2xl" textAlign={{ base: "center", md: "left" }}>
              See how our cutting-edge solutions can <br /> help you reach new
              customers and <br /> maximize your profits.{" "}
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
              Get started
            </Button>
          </Stack>

          {/* Right Side: Image */}
          <Box
            flex="1"
            mt={{ base: 8, md: 0 }}
            order={{ base: 1, md: 2 }}
          >
            <Image
              src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/" // Replace with your image URL
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
