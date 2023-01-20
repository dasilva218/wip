/* eslint-disable react/no-unescaped-entities */

import { Box, Center, Text, Flex, Wrap, WrapItem } from "@chakra-ui/react";
import Image from "next/image";
import Wauto from "../../components/layout/Wauto";


export default function AutoIndex({ isConnected }) {
  return (
    <>
      <Wauto>
        <Box>
         
          {/*  */}
          <Box h={'396'} overflow='hidden'>
            <Center>
              <video
                loop
                width={'100%'}
                autoPlay
                class='child'
                src='/Luxury Car Video Ads - Made with PosterMyWall.mp4'></video>
            </Center>
          </Box>
          {/* <Box h={`236px`} as="section">
        <Center h={`100%`}> section pub</Center>
      </Box> */}
          {/*  */}
          <Box pb={20}>
            <Center py={'10'}>
              <Text
                bgGradient='linear(to-l, #FEAF23, #FF0080)'
                bgClip='text'
                fontSize='8xl'
                fontWeight='extrabold'>
                Wip Auto
              </Text>
            </Center>
            <Flex flexDirection={`row`}>
              <Flex
                justifyContent={`center`}
                textAlign={`center`}
                fontFamily={`ubuntu`}
                w={`621px`}
                h={`404px`}
                flexDirection={`column`}
                gap={`12px`}>
                <Text
                  fontSize={`28px`}
                  fontWeight={`700`}
                  lineHeight={`149.9%`}>
                  Recherchez comparez et faites de vraies économies
                </Text>
                <Text
                  fontFamily={`ubuntu`}
                  fontSize={`20px`}
                  fontWeight={`300`}
                  lineHeight={`180.87%`}>
                  Nous vous connectons aux plus grandes enseignes de
                  location et vente de voitures..
                </Text>
                <Text
                  fontSize={`19px`}
                  fontWeight={`400`}
                  lineHeight={`36px`}>
                  wip met à votre disposition un catalogue
                  d&apos;agence et de particulier qui font dans la
                  vente et la location des véhicules vous y trouverez
                  également des services liés à l'automobile .
                </Text>
              </Flex>
              <Box position={`relative`} w={`450px`} flex='1 1 0'>
                <Image src={`/voiture.svg`} fill alt='voiture' />
              </Box>
            </Flex>
            <Center bgColor={'gray.700'}>
              <Wrap spacing={`50px`} h={`80px`}>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/bmw.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/ford.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/madza.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/nissan.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/tata-logo.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/mahindra-logo.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/wolwagen.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
                <WrapItem w='80px' h='80px' position={`relative`}>
                  <Image
                    src={`/logomarques/toyota-logo.svg`}
                    fill
                    alt='voiture'
                  />
                </WrapItem>
              </Wrap>
            </Center>
          </Box>
        </Box>
      </Wauto>
    </>
  );
}

export async function getServerSideProps() {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}