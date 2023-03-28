import { Box, Flex, Text, Show, Hide } from '@chakra-ui/react';
import Image from 'next/image';
import HomeB from '../button/ButtonHome';
import Certifie from '../Certifie';

function HomeChild() {
  return (
    <Box as={`section`} h={`100%`}>
      {/*  */}
      <Flex
        alignItems={'center'}
        flexDirection={['column', `row`]}
        h={[`100%`, '100%']}>
        {/*  */}
        <Flex
          as='aside'
          w={['100%', `705px`]}
          h={['100%', `477px`]}
          alignItems={['center', 'flex-start']}
          flexDirection={`column`}>
          {/*  */}
          <Certifie />
          {/*  */}
          <Flex
            w={'100%'}
            textAlign={['center']}
            gap={['0px', `65px`]}
            flexDirection={['column', 'row']}
            alignItems={`center`}>
            <Text
              as={`h1`}
              fontFamily={`ubuntu`}
              fontSize={['45px', `64px`]}
              fontWeight={`700`}
              w={[, `350px`]}
              textColor={`#FEAF23`}
              lineHeight={`80px`}
              letterSpacing={`0.02rem`}>
              Le Meilleur{' '}
            </Text>
            <Text
              _after={{
                content: `url("/underline.svg")`,
                left: -2,
                bottom: 10,
                position: 'absolute',
              }}
              color={'gray.600'}
              fontFamily={`ubuntu`}
              position={`relative`}
              textAlign={`center`}
              w={[`200px`]}
              fontWeight={`700`}
              letterSpacing={`0.02rem`}
              fontSize={`36px`}
              lineHeight={`70px`}>
              {' '}
              en un seul endroit
            </Text>
          </Flex>
          {/*  */}
          <Flex
            w={'100%'}
            justifyContent={'space-evenly'}
            alignItems={['center', 'center']}
            h={['350px']}
            flexDirection={`column`}
            gap={['80px', `30px`]}>
            <Text
              color={'gray.600'}
              textAlign={['center', '']}
              w={['90%', `100%`]}
              h={['40%', `100px`]}
              fontFamily={`monospace`}
              letterSpacing={`0.02rem`}
              fontWeight={`400`}
              fontSize={`20px`}
              lineHeight={`49px`}>
              Ne vous déplacez plus ! Peu importe où vous êtes, wip
              vous offre un catalogue de service sur mesure gagnez du
              temps faites des économies et comparez vos prix.
            </Text>
            {/*  */}
            <HomeB>DECOUVRIR</HomeB>
          </Flex>
        </Flex>
        <Hide breakpoint='(max-width: 500px)'>
          <Box
            h={'100%'}
            position={`relative`}
            as='aside'
            flex={`1 1 0`}>
            <Image src={`/home.svg`} alt='logo certifé' fill />
          </Box>
        </Hide>
      </Flex>
    </Box>
  );
}

export default HomeChild;
