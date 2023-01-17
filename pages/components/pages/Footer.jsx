import { Box, Center, Text, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Certifie from "../Certifie";

const Footer = () => {
  return (
    <Box m={"10"}  h={`100px`} bgColor="gray.700"  >
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
