import {
  Image,
  Text,
  Card,
  CardBody,
  Button,
  CardHeader,
  Heading,
  CardFooter,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

function CardP({ val, href }) {
  const [ver, setVer] = useState([val]);
  
  return (
    <Card boxShadow={"dark-lg"} alignItems={'center'} padding={3} display='flex'>
      <Image
        borderRadius='lg'
        objectFit='cover'
        maxW={{ base: '100%', sm: '150px' }}
        src={val.logo}
        alt='logo'
      />
      <CardHeader>
        <Heading size='md'> {val.name}</Heading>
      </CardHeader>
      <CardBody color={"#fff"} >
        <Text fontSize={'sm'}>
          Tel : {val.telephone.map((h) => h + ' / ')}
        </Text>
        <Text fontSize={'sm'}>email : {val.email}</Text>
        <Text fontSize={'sm'}>Quartier : {val.quartier}</Text>
        {val.horaire && (
          <div>
            {' '}
            <Text>
              Horaire:{' '}
              <span>
                ouvert de {val.horaire.ouverture} à{' '}
                {val.horaire.fermeture}h
              </span>
            </Text>
          </div>
        )}
      </CardBody>
      <CardFooter>
        <Link href={`${href}/${val._id}`}>
          <Button variant='solid' colorScheme='blue'>
            VOIR LES VEHICULES
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardP;
