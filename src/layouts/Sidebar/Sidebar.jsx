import React, { useState } from "react";
import {
  Box,
  Stack,
  Button,
  IconButton,
  VStack,
  HStack,
  Text,
  Divider,
  Collapse,
} from "@chakra-ui/react";
import { CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { FaGlobe, FaShoppingCart, FaUser } from "react-icons/fa";

const Sidebar = ({ onClose }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  // Define subitems for each main item
  const subItems = {
    Products: [
      "Best Sellers",
      "Men Clothing",
      "Women Clothing",
      "Kids and Baby Clothing",
      "Wall Art",
      "Calendars",
      "Cards",
      "Photo Book",
      "Hats",
      "Phone Cases",
      "Mugs and Bottles",
      "Stationery and Business",
    ],
    "Start Selling": [
      "Print on Demand",
      "Setup your Business",
      "Sell Custom Products",
      "Integrations",
      "Shipping and Delivery",
      "Partner Services",
      "Custom Packaging",
      "Move your Products",
    ],
    "Tool and Apps": [
      "Tools and App Overview",
      "Personalization Studio",
      "Auto File Sync",
      "Design Maker",
      "Product Creation Tools",
      "Mockup Studio",
      "Price Navigator",
      "Analytics",
      "Gelato App",
    ],
    Pricing: [
      "Payments and Pricing",
      "Subscription Plan",
      "Gelato+",
      "Gelato+ Gold",
      "Platinum",
      "Others",
    ],
    Resources: [
      "Resource Center",
      "Gelato Academy",
      "Custom Stories",
      "Blog",
      "Whitepapers",
      "Newsroom",
      "Sustainability",
      "Help Center",
    ],
    GelatoConnect: ["Logistics", "Workflow", "Procurement"],
  };

  // Toggle the expanded state for the selected item
  const toggleExpand = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  return (
    <Box
      bg="white"
      w="300px"
      h="100vh"
      pos="fixed"
      top={0}
      left={0}
      zIndex={1200}
      color="black"
      boxShadow="lg"
      p={4}
      borderRadius="md"
      overflow="auto"
    >
      {/* First Row */}
      <HStack spacing={5} alignItems="center" mb={4}>
        <IconButton
          aria-label="Close Menu"
          icon={<CloseIcon />}
          onClick={onClose}
          color="black"
          bg="white"
          borderRadius="full"
        />
        <HStack spacing={2} alignItems="center">
          <FaGlobe />
          <Text>EN/INR</Text>
          <ChevronDownIcon />
        </HStack>
        <Divider orientation="vertical" height="30px" borderColor="gray.600" />{" "}
        <HStack spacing={2} alignItems="center">
          <FaShoppingCart />
          <Text>Cart</Text>
        </HStack>
      </HStack>

      <Divider mb={4} />

      {/* Second Row */}
      <HStack spacing={4} alignItems="center">
        <Button
          variant="solid"
          borderRadius="50px"
          bg="black"
          color="white"
          w="xl"
          _hover={{ color: "gray.300" }}
          transition="transform 0.2s"
        >
          Sign Up Free
        </Button>
        <Divider orientation="vertical" height="30px" borderColor="gray.600" />{" "}
        <Button
          variant="ghost"
          borderRadius="md"
          leftIcon={<FaUser />}
          w="full"
          _hover={{ transform: "scale(1.1)" }}
          transition="transform 0.2s"
        >
          Sign In
        </Button>
      </HStack>
      <Divider height="20px" />

      {/* Navigation Items */}
      <VStack spacing={4} alignItems="flex-start" mt={5}>
        {[
          "Products",
          "Start Selling",
          "Tool and Apps",
          "Pricing",
          "Resources",
          "Pro Sellers",
          "GelatoConnect",
        ].map((item) => (
          <Box key={item} w="full">
            <HStack
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
              width="full"
              cursor="pointer"
              _hover={{ bg: "gray.200" }}
              p={2}
              borderRadius="lg"
              onClick={() => toggleExpand(item)}
            >
              <Text fontWeight="bold" fontSize="lg">
                {item}
              </Text>
              {/* Display different icons based on whether the item is expanded */}
              {expandedItem === item ? <IoChevronDown /> : <IoChevronForward />}
            </HStack>

            {/* Subitems (Collapsible) */}
            {subItems[item] && (
              <Collapse in={expandedItem === item}>
                <VStack align="start" pl={6} pt={2} spacing={2}>
                  {subItems[item].map((subItem, index) => (
                    <Text
                      key={index}
                      fontSize="md"
                      color="gray.600"
                      _hover={{ color: "black" }}
                    >
                      {subItem}
                    </Text>
                  ))}
                </VStack>
              </Collapse>
            )}
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
