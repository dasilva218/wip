import { Box, Flex, Text, Show, Hide } from '@chakra-ui/react';
import Image from 'next/image';
import HomeB from '../button/ButtonHome';
import Certifie from '../Certifie';

function HomeChild() {
  return (
    <Box as={`section`} h={`100%`}>
      {/*  */}
      <Flex flexDirection={['column', `row`]} h={[`100%`, '95%']}>
        {/*  */}
        <Flex
          as='aside'
          w={['100%', `705px`]}
          h={[, `477px`]}
          alignItems={['center']}
          flexDirection={`column`}>
          {/*  */}
          <Certifie />
          {/*  */}
          <Flex
            textAlign={['center']}
            gap={['0px', `25px`]}
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
            justifyContent={'space-evenly'}
            alignItems={'center'}
            h={['350px']}
            flexDirection={`column`}
            gap={['80px', `55px`]}>
            <Text
              textAlign={'center'}
              w={['90%', `561px`]}
              h={['40%', `108px`]}
              fontFamily={`ubuntu`}
              letterSpacing={`0.02rem`}
              fontWeight={`400`}
              fontSize={`20px`}
              lineHeight={`36px`}>
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
            position={`relative`}
            as='aside'
            w={`100%`}
            flex={`1 1 0`}>
            <Image src={`/home.svg`} alt='logo certifé' fill />
          </Box>
        </Hide>
      </Flex>
    </Box>
  );
}

export default HomeChild;
