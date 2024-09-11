import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  VStack,
  HStack,
  Text,
  Link,
  Button,
  useBreakpointValue,
  Image,
  Select,
  Divider,
  Collapse,
  IconButton,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Logo from "../Logo/Logo";
import appstore_image from "../../assets/images/appstore.png";
import playstore_image from "../../assets/images/playstore.png";

const Footer = () => {
  const [isCollapsed, setIsCollapsed] = useState({});
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  const handleToggle = (section) => {
    setIsCollapsed((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const gridTemplateColumns = useBreakpointValue({
    base: "1fr",
    sm: "repeat(2, 1fr)",
    md: "2fr 1fr 1fr 1fr 1fr",
  });

  return (
    <Box bg="black" color="white" py={8} zIndex={800}>
      {/* Top Header Section */}
      <Container maxW="container.xl" mb={8} px={{ base: 6, md: 12 }}>
        <VStack
          spacing={4}
          align="start"
          justifyContent={{ base: "center", md: "space-between" }}
          w="full"
        >
          <HStack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 4, md: 8 }}
            w="full"
          >
            <Box>
              <Logo />
            </Box>
            {!isSmallScreen && (
              <HStack
                spacing={2}
                align="center"
                justify="flex-end"
                flex={1}
                mr={50}
              >
                <Text fontSize="lg" fontWeight="bold">
                  Find Gelato in:
                </Text>
                <Link
                  href="#"
                  _hover={{ color: "teal.200" }}
                  fontSize="2xl"
                  ml={5}
                >
                  <FaFacebookF />
                </Link>
                <Link
                  href="#"
                  _hover={{ color: "teal.200" }}
                  fontSize="2xl"
                  ml={5}
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="#"
                  _hover={{ color: "teal.200" }}
                  fontSize="2xl"
                  ml={5}
                >
                  <FaLinkedinIn />
                </Link>
              </HStack>
            )}
          </HStack>
        </VStack>
      </Container>

      {/* Main Footer Section */}
      <Container maxW="container.xl" px={{ base: 6, md: 12 }}>
        {isSmallScreen ? (
          <VStack spacing={6} align="start">
            <Text fontSize="sm" fontWeight="bold">
              Gelato has created the world's largest network for local
              production and distribution of customized products. Together we
              bring creativity to life - and into business.
            </Text>
            <Button
              color="black"
              borderRadius="50px"
              bg="white"
              variant="solid"
              size="sm"
              mb={5}
            >
              Get Started
            </Button>

            {[
              "Print on Demand",
              "Integrations",
              "Start Selling",
              "Company",
            ].map((section) => (
              <VStack align="start" spacing={1} fontSize="sm" key={section}>
                <HStack
                  spacing={2}
                  align="center"
                  onClick={() => handleToggle(section)}
                  cursor="pointer"
                  _hover={{ color: "teal.200" }}
                >
                  <Text fontSize="xl" fontWeight="bold">
                    {section}
                  </Text>
                  {isCollapsed[section] ? <FaChevronUp /> : <FaChevronDown />}
                </HStack>
                <Collapse in={isCollapsed[section]}>
                  <VStack align="start" spacing={1} fontSize="md">
                    {/* Replace these links with actual links based on the section */}
                    {section === "Print on Demand" && (
                      <>
                        <Link href="#">What is print on demand?</Link>
                        <Link href="#">Product catalog</Link>
                        <Link href="#">Shipping and delivery</Link>
                        <Link href="#">Dropshipping products</Link>
                        <Link href="#">Pro sellers</Link>
                        <Link href="#">White label products</Link>
                        <Link href="#">Returns policy</Link>
                        <Link href="#">Global, yet local</Link>
                        <Link href="#">Sustainability</Link>
                        <Link href="#">Support</Link>
                      </>
                    )}
                    {section === "Integrations" && (
                      <>
                        <Link href="#">Shopify</Link>
                        <Link href="#">Etsy</Link>
                        <Link href="#">WooCommerce</Link>
                        <Link href="#">Wix</Link>
                        <Link href="#">Squarespace</Link>
                        <Link href="#">BigCommerce</Link>
                        <Link href="#">API</Link>
                      </>
                    )}
                    {section === "Start Selling" && (
                      <>
                        <Link href="#">Embroidery</Link>
                        <Link href="#">Print on demand t-shirts</Link>
                        <Link href="#">Print on demand hoodies</Link>
                        <Link href="#">Print on demand posters</Link>
                        <Link href="#">Print on demand canvas</Link>
                        <Link href="#">Print on demand calendars</Link>
                        <Link href="#">Print on demand mugs</Link>
                        <Link href="#">Custom products</Link>
                        <Link href="#">Custom clothing</Link>
                        <Link href="#">Custom merchandise</Link>
                        <Link href="#">Custom phone cases</Link>
                        <Link href="#">Print on demand Europe</Link>
                        <Link href="#">Print on demand UK</Link>
                        <Link href="#">Print on demand France</Link>
                        <Link href="#">Print on demand Canada</Link>
                        <Link href="#">Merch maker</Link>
                      </>
                    )}
                    {section === "Company" && (
                      <>
                        <Link href="#">GelatoConnect</Link>
                        <Link href="#">About Gelato</Link>
                        <Link href="#">Leadership team</Link>
                        <Link href="#">Board & investors</Link>
                        <Link href="#">Newsroom</Link>
                        <Link href="#">Blog</Link>
                        <Link href="#">Customer Stories</Link>
                        <Link href="#">Partners</Link>
                        <Link href="#">Careers</Link>
                        <Link href="#">Affiliates program</Link>
                        <Link href="#">Contact us</Link>
                        <Link href="#">Legal</Link>
                        <Link href="#">Privacy policy</Link>
                        <Link href="#">Cookie policy</Link>
                        <Link href="#">API terms</Link>
                        <Link href="#">Sitemap</Link>
                      </>
                    )}
                  </VStack>
                </Collapse>
              </VStack>
            ))}
            <Text fontSize="lg" fontWeight="bold" mt={5}>
              Get the App:
            </Text>
            <HStack spacing={4}>
              <Image src={playstore_image} alt="Play Store" height={10} />
              <Image src={appstore_image} alt="App Store" height={10} />
            </HStack>
            <HStack spacing={2} align="center">
              <Text fontSize="lg" fontWeight="bold">
                Find Gelato in:
              </Text>
              <Link href="#" _hover={{ color: "teal.200" }} fontSize="2xl">
                <FaFacebookF />
              </Link>
              <Link href="#" _hover={{ color: "teal.200" }} fontSize="2xl">
                <FaTwitter />
              </Link>
              <Link href="#" _hover={{ color: "teal.200" }} fontSize="2xl">
                <FaLinkedinIn />
              </Link>
            </HStack>
            <Select
              placeholder="English"
              maxWidth="200px"
              size="md"
              color="white"
              bg="black"
              borderColor="gray.600"
              _placeholder={{ color: "white" }}
              _focus={{ borderColor: "teal.200", boxShadow: "none" }}
              _menu={{ bg: "black", color: "white" }}
              _option={{
                bg: "black",
                color: "white",
                _hover: { bg: "gray.800" },
              }}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              {/* Add more language options as needed */}
            </Select>
            <VStack
              mt={8}
              spacing={4}
              align="start" // Align to start
            >
              <Link href="#">Contact us</Link>

              <Link href="#">Legal</Link>

              <Link href="#">Privacy policy</Link>

              <Link href="#">Cookie policy</Link>

              <Link href="#">API terms</Link>

              <Link href="#">Sitemap</Link>
            </VStack>
          </VStack>
        ) : (
          <Grid templateColumns={gridTemplateColumns} gap={6}>
            <VStack
              align="start"
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              <Text fontSize="sm" fontWeight="bold">
                Gelato has created the world's largest network for local
                production and distribution of customized products. Together we
                bring creativity to life - and into business.
              </Text>
              <Button
                color="black"
                mt={2}
                bg="white"
                variant="solid"
                size="sm"
                borderRadius="50px"
              >
                Get Started
              </Button>
              <Text fontSize="lg" fontWeight="bold" mt={2}>
                Get the App
              </Text>
              <HStack spacing={2} mt={2}>
                <Image src={playstore_image} alt="Play Store" height={14} />
                <Image src={appstore_image} alt="App Store" height={14} />
              </HStack>
            </VStack>

            <VStack align="start" spacing={1} fontSize="sm">
              <Text fontSize="md" fontWeight="bold">
                Print on Demand
              </Text>
              <Link href="#">What is print on demand?</Link>
              <Link href="#">Product catalog</Link>
              <Link href="#">Shipping and delivery</Link>
              <Link href="#">Dropshipping products</Link>
              <Link href="#">Pro sellers</Link>
              <Link href="#">White label products</Link>
              <Link href="#">Returns policy</Link>
              <Link href="#">Global, yet local</Link>
              <Link href="#">Sustainability</Link>
              <Link href="#">Support</Link>
            </VStack>

            <VStack align="start" spacing={1} fontSize="sm">
              <Text fontSize="md" fontWeight="bold">
                Integrations
              </Text>
              <Link href="#">Shopify</Link>
              <Link href="#">Etsy</Link>
              <Link href="#">WooCommerce</Link>
              <Link href="#">Wix</Link>
              <Link href="#">Squarespace</Link>
              <Link href="#">BigCommerce</Link>
              <Link href="#">API</Link>
            </VStack>

            <VStack align="start" spacing={1} fontSize="sm">
              <Text fontSize="md" fontWeight="bold">
                Start Selling
              </Text>
              <Link href="#">Embroidery</Link>
              <Link href="#">Print on demand t-shirts</Link>
              <Link href="#">Print on demand hoodies</Link>
              <Link href="#">Print on demand posters</Link>
              <Link href="#">Print on demand canvas</Link>
              <Link href="#">Print on demand calendars</Link>
              <Link href="#">Print on demand mugs</Link>
              <Link href="#">Custom products</Link>
              <Link href="#">Custom clothing</Link>
              <Link href="#">Custom merchandise</Link>
              <Link href="#">Custom phone cases</Link>
              <Link href="#">Print on demand Europe</Link>
              <Link href="#">Print on demand UK</Link>
              <Link href="#">Print on demand France</Link>
              <Link href="#">Print on demand Canada</Link>
              <Link href="#">Merch maker</Link>
            </VStack>

            <VStack align="start" spacing={1} fontSize="sm">
              <Text fontSize="md" fontWeight="bold">
                Company
              </Text>
              <Link href="#">GelatoConnect</Link>
              <Link href="#">About Gelato</Link>
              <Link href="#">Leadership team</Link>
              <Link href="#">Board & investors</Link>
              <Link href="#">Newsroom</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Customer Stories</Link>
              <Link href="#">Partners</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Affiliates program</Link>
              <Link href="#">Contact us</Link>
              <Link href="#">Legal</Link>
              <Link href="#">Privacy policy</Link>
              <Link href="#">Cookie policy</Link>
              <Link href="#">API terms</Link>
              <Link href="#">Sitemap</Link>
            </VStack>
          </Grid>
        )}

        {isSmallScreen ? null : (
          <VStack
            mt={8}
            spacing={4}
            align="start"
            w="full"
            direction={{ base: "column", md: "row" }}
          >
            <HStack spacing={2} justify="space-between" w="full">
              <HStack
                spacing={2}
                flexWrap={{ base: "wrap", md: "nowrap" }}
                flex="1"
              >
                <Link href="#">Contact us</Link>
                <Divider
                  orientation="vertical"
                  height="20px"
                  borderColor="gray.600"
                />
                <Link href="#">Legal</Link>
                <Divider
                  orientation="vertical"
                  height="20px"
                  borderColor="gray.600"
                />
                <Link href="#">Privacy policy</Link>
                <Divider
                  orientation="vertical"
                  height="20px"
                  borderColor="gray.600"
                />
                <Link href="#">Cookie policy</Link>
                <Divider
                  orientation="vertical"
                  height="20px"
                  borderColor="gray.600"
                />
                <Link href="#">API terms</Link>
                <Divider
                  orientation="vertical"
                  height="20px"
                  borderColor="gray.600"
                />
                <Link href="#">Sitemap</Link>
              </HStack>
              <Select
                placeholder="English"
                maxWidth="200px"
                size="md"
                color="white"
                bg="black"
                borderColor="gray.600"
                _placeholder={{ color: "white" }}
                _focus={{ borderColor: "teal.200", boxShadow: "none" }}
                _menu={{ bg: "black", color: "white" }}
                _option={{
                  bg: "black",
                  color: "white",
                  _hover: { bg: "gray.800" },
                }}
                ml={4}
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                {/* Add more language options as needed */}
              </Select>
            </HStack>
          </VStack>
        )}
      </Container>
    </Box>
  );
};

export default Footer;
