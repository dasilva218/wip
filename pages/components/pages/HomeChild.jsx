import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import HomeB from "../button/ButtonHome";
import Certifie from "../Certifie";



function HomeChild() {
  return (
    <Box as={`section`} h={`100%`}>
      <Flex flexDirection={`row`} h={`95%`}>
        <Flex
          as="aside"
          justifyContent={"space-around"}
          w={`705px`}
          h={`477px`}
          flexDirection={`column`}>
          {/*  */}
          <Certifie/>
          {/*  */}
          <Flex gap={`25px`} alignItems={`center`}>
            <Text
              as={`h1`}
              fontFamily={`ubuntu`}
              fontSize={`64px`}
              fontWeight={`700`}
              w={`350px`}
              textColor={`#FEAF23`}
              lineHeight={`80px`}
              letterSpacing={`0.02rem`}>
              Le Meilleur{" "}
            </Text>
            <Text
              _after={{
                content: `url("/underline.svg")`,
                left: -2,
                bottom: 10,
                position: "absolute",
              }}
              fontFamily={`ubuntu`}
              position={`relative`}
              textAlign={`center`}
              w={`200px`}
              fontWeight={`700`}
              letterSpacing={`0.02rem`}
              fontSize={`36px`}
              lineHeight={`70px`}>
              {" "}
              en un seul endroit
            </Text>
          </Flex>
          <Flex flexDirection={`column`} gap={`55px`}>
            <Text
              w={`561px`}
              h={`108px`}
              fontFamily={`ubuntu`}
              letterSpacing={`0.02rem`}
              fontWeight={`400`}
              fontSize={`20px`}
              lineHeight={`36px`}
              textColor={`#747582`}>
              Ne vous déplacez plus ! Peu importe où vous êtes, wip vous offre
              un catalogue de service sur mesure gagnez du temps faites des
              économies et comparez vos prix.
            </Text>
            {/*  */}
            <HomeB>DECOUVRIR</HomeB>
          </Flex>
        </Flex>
        <Box position={`relative`} as="aside" w={`100%`} flex={`1 1 0`}>
          <Image src={`/home.svg`} alt="logo certifé" fill />
        </Box>
      </Flex>
    </Box>
  );
}

export default HomeChild;
