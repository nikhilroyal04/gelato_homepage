import React, { useState } from "react";
import {
  Box,
  Flex,
  IconButton,
  Button,
  HStack,
  Divider,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { FaHeadphonesSimple } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
import Logo from "../Logo/Logo";
import Banner from "./Banner";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State to track the open menu
  const [openMenu, setOpenMenu] = useState(null);

  const handleLogin = () => navigate("/login");
  const handleContact = () => navigate("/");

  // Function to render nested sub-menu items
  const renderSubItems = (subItems) => (
    <VStack align="start" spacing={2} p={2}>
      {subItems.map((subItem, index) => (
        <MenuItem
          key={index}
          _hover={{ bg: "gray.200" }}
          px={4}
          py={2} // Add vertical padding for better spacing
          cursor="pointer"
        >
          {subItem}
        </MenuItem>
      ))}
    </VStack>
  );

  // Render Menu with hover functionality and submenu visibility control
  const renderMenu = (label, subItems, menuKey) => (
    <Menu isOpen={openMenu === menuKey} onClose={() => setOpenMenu(null)}>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        _hover={{ bg: "gray.200" }}
        variant="ghost"
        px={2}
        mx="auto"
        onMouseEnter={() => setOpenMenu(menuKey)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        {label}
      </MenuButton>
      <MenuList
        onMouseEnter={() => setOpenMenu(menuKey)}
        onMouseLeave={() => setOpenMenu(null)}
      >
        {renderSubItems(subItems)}
      </MenuList>
    </Menu>
  );

  return (
    <>
      <Banner />
      {/* Main Header */}
      <Box
        bg="white"
        boxShadow="md"
        borderBottom="1px"
        borderColor="gray.200"
        zIndex={900}
        position="sticky"
        width="100%"
        top={0}
      >
        <Flex
          h={14}
          alignItems="center"
          justifyContent="center"
          px={{ base: 5, md: 24 }}
        >
          <IconButton
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            aria-label="Open Menu"
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            color="black"
            bg="white"
          />
          <Logo />
          <Flex alignItems="center" ml="auto">
            <HStack spacing={4}>
              <Button
                variant="ghost"
                borderRadius="50px"
                color="black"
                leftIcon={<FaHeadphonesSimple />}
                onClick={handleContact}
                display={{ base: "none", md: "flex" }}
              >
                Contact Us
              </Button>
              <Button
                variant="ghost"
                color="black"
                borderRadius="50px"
                leftIcon={<BsGlobe />}
                rightIcon={<ChevronDownIcon />}
                display={{ base: "none", md: "flex" }}
              >
                EN/INR
              </Button>
              <Button
                borderRadius="50px"
                variant="ghost"
                color="black"
                leftIcon={<FaShoppingCart />}
                display={{ base: "none", md: "flex" }}
              >
                Cart
              </Button>
              <Button
                variant="ghost"
                color="black"
                borderRadius="50px"
                leftIcon={<FaSignInAlt />}
                onClick={handleLogin}
                display={{ base: "none", md: "flex" }}
              >
                Sign In
              </Button>
              <Button
                variant="solid"
                color="white"
                bg="black"
                borderRadius="50px"
                _hover={{
                  color: "gray.300",
                }}
              >
                Sign up for Free
              </Button>
            </HStack>
          </Flex>
        </Flex>
        <Divider my={2} display={{ base: "none", md: "flex" }} />
        {/* Second Header Section - Hidden on small screens */}
        <Flex
          justifyContent="start"
          p={3}
          px={{ base: 0, lg: 24 }}
          overflowx="auto"
          display={{ base: "none", md: "flex" }}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <HStack spacing={2} ml={2} position="relative">
            {/* Menu for Products */}
            {renderMenu(
              "Products",
              [
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
                "Stationary and Business",
              ],
              "products"
            )}

            {/* Menu for Start Selling */}
            {renderMenu(
              "Start Selling",
              [
                "Print on Demand",
                "Setup your Business",
                "Sell Custom Products",
                "Integrations",
                "Shipping and Delivery",
                "Partner Services",
                "Custom Packaging",
                "Move your Products",
              ],
              "startSelling"
            )}

            {/* Menu for Tools and Apps */}
            {renderMenu(
              "Tools and Apps",
              [
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
              "toolsAndApps"
            )}

            {/* Menu for Pricing */}
            {renderMenu(
              "Pricing",
              [
                "Payments and Pricing",
                "Subscription Plan",
                "Gelato+",
                "Gelato+ Gold",
                "Platinum",
                "Others",
              ],
              "pricing"
            )}

            {/* Menu for Resources */}
            {renderMenu(
              "Resources",
              [
                "Resource Center",
                "Gelato Academy",
                "Custom Stories",
                "Blog",
                "Whitepapers",
                "Newsroom",
                "Sustainability",
                "Help Center",
              ],
              "resources"
            )}

            {/* "Pro Sellers" without dropdown */}
            <Button
              variant="ghost"
              _hover={{ bg: "gray.200" }}
              px={4} // Add padding
              py={2} // Add vertical padding
            >
              Pro Sellers
            </Button>

            {/* Menu for GelatoConnect */}
            {renderMenu(
              "GelatoConnect",
              ["Logistics", "Workflow", "Procurement"],
              "gelatoConnect"
            )}
          </HStack>
        </Flex>
      </Box>

      {/* Mobile Sidebar */}
      {isOpen && (
        <Box
          pb={4}
          display={{ md: "none" }}
          bg="white"
          borderTop="1px"
          borderColor="gray.200"
        >
          <Sidebar onClose={onClose} />
        </Box>
      )}
    </>
  );
};

export default Header;
