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
      <Box>
        <button type='button' onClick={() => route.back()}>
          <Box display={'flex'} gap='2' alignItems='center'>
            <BiArrowBack />
            Retour
          </Box>
        </button>
      </Box>
      <Center>
        <Text fontSize={'3xl'}>Liste des véhicules</Text>
      </Center>
      <Box bgColor={'blue'} padding={'20px'}>
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
        <div className=' font-bold h-60  flex flex-col justify-center items-center gap-5 '>
          <h1>Nom : {partenaire.name}</h1>
          <p>
            Tel : {partenaire.telephone?.map((tel) => tel + ' / ')}
          </p>
          <p> Email : {partenaire.email}</p>
          <button className='btn btn-outline' onClick={closeModal}>
            Fermer
          </button>
        </div>
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
