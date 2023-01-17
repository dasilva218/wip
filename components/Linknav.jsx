import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";




function Linknav() {



  return (
    <Flex as={`nav`} justifyContent={`space-between`} alignItems={`center`}>
      {/*  */}
      <Box>
        {" "}
        <Image src={`/logo/WIP.svg`} alt={`logo`} width={100} height={100} />
      </Box>

    
     
    </Flex>
  );
}

export default Linknav;
