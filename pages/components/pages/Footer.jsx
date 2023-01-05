import { Box, Center, Text, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Certifie from "../Certifie";

const Footer = () => {
  return (
    <Box mt={`50px`} h={`100px`}  bgGradient="linear-gradient(101.14deg, #FFA500 -5.69%, rgba(254, 175, 35, 0.62) 69.16%)">
      <Center h={`100%`}>
        <Wrap spacing={`50px`}>
          <WrapItem>WIP</WrapItem>
          <Wrap>
            <Certifie />
          </Wrap>
        </Wrap>
      </Center>
    </Box>
  );
};

export default Footer;
