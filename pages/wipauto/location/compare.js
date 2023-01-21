import { useState } from 'react';
import CardVehicule from '../../../components/CardVehicule';
import { Box, Wrap, WrapItem, Center, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {
  compare_car_model_marque,
  get_dealer,
} from '../../../hooks/helpers';
import Modal from '../../../components/modal';
import { BiArrowBack } from 'react-icons/bi';

const Compare = ({ data }) => {
  const [cars, setCar] = useState(data);
  const route = useRouter();
  const { partner, service } = route.query;
  const [partenaire, setPartenaire] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const fetch_dealer = async (target) => {
    if (partner === 'concessionnaires') {
      const fetch = await get_dealer(target);
      setPartenaire(fetch);
      openModal();
    } else if (partner === 'particuliers') {
      const fetch = await get_dealer(target);
      setPartenaire(fetch);
      openModal();
    }
  };

  return (
    <Box>
      <Box bg={'whatsapp.200'}>
        <button type='button' onClick={() => route.back()}>
          <Box display={'flex'} gap='2' alignItems='center'>
            <BiArrowBack />
            Retour
          </Box>
        </button>
      </Box>
      <Center bg={'gray'}>
        <Text fontSize={'3xl'}>Liste des véhicules</Text>
      </Center>
      <Box padding={'20px'}>
        <Wrap>
          {cars.map((car) => (
            <WrapItem key={car._id} h='100%'>
              <CardVehicule
                action={fetch_dealer}
                item={car}
                service={service}
                compare={true}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Box>

      <Modal visible={isModalOpen}>
        <h1>{partenaire.name}</h1>
        <p>{partenaire.telephone}</p>
        <button onClick={closeModal}>Fermer</button>
      </Modal>
    </Box>
  );
};

export const getServerSideProps = async (ctx) => {
  const { marque, model, service } = ctx.query;

  const car_compar = await compare_car_model_marque(
    marque,
    model,
    service
  );

  return {
    props: {
      data: car_compar,
    },
  };
};

export default Compare;
