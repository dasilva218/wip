import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

function Certifie() {
  return (
    <Flex gap={`5px`}>
      <Text textColor={`orange`}>
        {" "}
        &copy; wip - 2022 - tous droits réservés
      </Text>
      <Box pos={`relative`} w={`18px`}>
        <Image src={`/certifie.svg`} alt="logo certifé" fill />
      </Box>
    </Flex>
  );
}

export default Certifie;
