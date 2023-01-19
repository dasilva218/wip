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
import { BiArrowBack } from 'react-icons/bi';
import Wauto from '../../../../components/layout/Wauto';
import Pub_location from '../../../../components/Pub_location';
import Radio_group from '../../../../components/Radio';
import DisplayPartners from '../../../../components/layout/DisplayPartners';
import clientPromise from '../../../../lib/mongodb';

export default function Dealer_Location({ dealers_location }) {
  // etats
  const [dealers, setDealers] = useState(dealers_location);
  const route = useRouter();
  const href = route.asPath;
  const routesplice = route.asPath.split('/');
  const name = routesplice.findLast((element) => element);

  const filter = async (target) => {
    return await axios.get(
      `http://localhost:3000/api/location/dealers?commune=${target}`
    );
  };

  const disable = async () => {
    return await axios.get(
      `http://localhost:3000/api/location/dealers`
    );
  };

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
                trouver, réserver et louer une voiture en toute
                <Box as='span' color={`#FEAF23`}>
                  {' '}
                  simplicité
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
                concessionnaire présent dans ce catalogues propose la
                location de véhicule neuf et occasion, ainsi que l
                &apos;entretien,la révision, le contrôle et la
                réparation de véhicules de marque avec un atelier
                mécanique.
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
                <br /> Vous cherchez à acheter un véhicule neuf ou une
                occasion récente? Ayez le réflexe du concessionnaire,
                qui peut vous conseiller sur le modèle, les options et
                équipements de votre prochaine voiture. Chaque
                concessionnaire ou distributeur peut être multimarque
                ou ne vendre que les modèles d&apos;un seul
                constructeur, et propose des services complémentaires
                de location longue durée, solutions de financement,
                ... La concession dispose aussi de mécaniciens auto
                expérimentés qui peuvent assurer le suivi de votre
                véhicule.
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

  const client = await clientPromise;
  const db = client.db('wip_db');
  const dealers_location = await db
    .collection('partners')
    .find({ location: true })
    .toArray();
  return {
    props: {
      dealers_location: JSON.parse(JSON.stringify(dealers_location)),
    },
  };
}
