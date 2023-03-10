import {
  Box,
  Center,
  Text,
  Wrap,
  WrapItem,
  Divider,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import CardP from '../../../../components/pages/CardP';
import axios from 'axios';
import Wauto from '../../../../components/layout/Wauto';
import Pub_location from '../../../../components/Pub_location';
import Radio_group from '../../../../components/Radio';
import DisplayPartners from '../../../../components/layout/DisplayPartners';
import { get_concessionnaires_location } from '../../../../hooks/helpers';

export default function Dealer_Location({ dealers_location }) {
  // etats

  const [dealers, setDealers] = useState(dealers_location);
  const route = useRouter();
  const href = route.asPath;
  const routesplice = route.asPath.split('/');
  const name = routesplice.findLast((element) => element);
  //action
  const filter = async (target) => {
    return await axios.get(`/api/location/dealers?commune=${target}`);
  };

  const disable = async () => {
    return await axios.get(`/api/location/dealers`);
  };
  //affichage
  return (
    <Wauto>
      {/*  */}

      {/*  */}
      <Pub_location />
      {/*  */}
      <Box pt={`50px`} as='section'>
        <Center fontFamily={`ubuntu`}>
          <Text
            fontSize={`36px`}
            lineHeight={`101px`}
            fontWeight={`700`}>
            Location {name}
          </Text>
        </Center>
        {/*  */}
        <Box>
          <Wrap mt={`50px`}>
            <WrapItem fontFamily={`ubuntu`} w={`613px`} h={`303px`}>
              {' '}
              <Text
                _after={{
                  content: `url("/underline.svg")`,
                  right: 220,
                  bottom: -20,
                  position: 'absolute',
                  transform: `rotate(180deg)`,
                }}
                position={`relative`}
                fontWeight={`700`}
                fontSize={`54px`}
                lineHeight={`80px`}>
                trouver, r??server et louer une voiture en toute
                <Box as='span' color={`#FEAF23`}>
                  {' '}
                  simplicit??
                </Box>
              </Text>{' '}
            </WrapItem>
            <WrapItem flex={`1 1 0`} position={`relative`} w={`100%`}>
              <Image src={`/voiture.svg`} fill alt='voiture' />
            </WrapItem>
          </Wrap>
        </Box>
        {/*  */}
        <Box display={'flex'} justifyContent={'center'}>
          <Center
            bg={'#888686'}
            w={'994px'}
            h={'50px'}
            fontFamily={`ubuntu`}>
            <Text
              fontSize={`30px`}
              lineHeight={`101px`}
              fontWeight={`700`}>
              <Box as='span' color={'#FEAF23'}>
                AUTO
              </Box>{' '}
              {name}
            </Text>
          </Center>
        </Box>
        {/*  */}
        <Box>
          <Wrap mt={`50px`} spacingX={'25px'}>
            <WrapItem
              alignItems={'center'}
              fontFamily={`ubuntu`}
              w={`600px`}
              h={`303px`}>
              {' '}
              <Text fontSize={`18px`} lineHeight={`30px`}>
                Liste des concessionnaires automobiles chaque
                concessionnaire pr??sent dans ce catalogues propose la
                location de v??hicule neuf et occasion, ainsi que l
                &apos;entretien,la r??vision, le contr??le et la
                r??paration de v??hicules de marque avec un atelier
                m??canique.
              </Text>{' '}
            </WrapItem>
            <WrapItem flex={`1 1 0`} w={`100%`} h={'503px'}>
              <Text
                h={'100%'}
                bgColor={'#888686'}
                padding={'38px'}
                fontSize={`18px`}
                lineHeight={`39px`}>
                <Box as='span' color={'red.300'}>
                  POURQUOI CHOISIR UN CONCESSIONNAIRE ?
                </Box>
                <br /> Vous cherchez ?? acheter un v??hicule neuf ou une
                occasion r??cente? Ayez le r??flexe du concessionnaire,
                qui peut vous conseiller sur le mod??le, les options et
                ??quipements de votre prochaine voiture. Chaque
                concessionnaire ou distributeur peut ??tre multimarque
                ou ne vendre que les mod??les d&apos;un seul
                constructeur, et propose des services compl??mentaires
                de location longue dur??e, solutions de financement,
                ... La concession dispose aussi de m??caniciens auto
                exp??riment??s qui peuvent assurer le suivi de votre
                v??hicule.
              </Text>{' '}
            </WrapItem>
          </Wrap>
        </Box>
        {/*  */}
        <Box mt={'20px'} display={'flex'} justifyContent={'center'}>
          <Center
            bg={'#888686'}
            w={'994px'}
            h={'50px'}
            fontFamily={`ubuntu`}>
            <Text
              fontSize={`30px`}
              lineHeight={`101px`}
              fontWeight={`700`}>
              <Box as='span' color={'#FEAF23'}>
                Liste
              </Box>{' '}
              {name}
            </Text>
          </Center>
        </Box>
        <Divider mt={'20px'} />
        {/*  */}
        <Radio_group
          setDealers={setDealers}
          filter={filter}
          disableB={disable}
        />
        {/*  */}
      </Box>
      {/*  */}

      {/*  */}
      <DisplayPartners>
        {dealers.map((item) => (
          <CardP key={item._id} val={item} href={href} />
        ))}
      </DisplayPartners>

      {/*  */}
    </Wauto>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const dealers_location = await get_concessionnaires_location();

  return {
    props: {
      dealers_location,
    },
  };
}
