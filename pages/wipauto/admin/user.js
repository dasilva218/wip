import { getSession, useSession } from 'next-auth/react';
import User from '../../../components/layout/users/User';
import {
  get_carrent,
  get_car_sale,
  get_partner,
} from '../../../hooks/helpers';
import { createContext, useState } from 'react';
import {
  Car,
  Card_state,
  FormVv,
  ModalAddCar,
  ModalFormEdit,
  ModalFormVl,
} from '../../../components/admin/UserComponent';

/**
 * * contexte provider
 */
export const Contexte = createContext({});

export default function AdmiUser({ partenaire, car_sale, car_rent }) {
  /**
   * * states
   */
  const [partner, setPartner] = useState(partenaire);
  const [carSales, setCarSales] = useState(car_sale);
  const [carSRents, setCarRents] = useState(car_rent);
  const [OpenModal, setOpenModal] = useState(false);
  const [openModalEdit, setopenModalEdit] = useState(false);
  const [carEdit, setcarEdit] = useState({});

  /**
   * * contexte value
   */
  const contexteValues = {
    partner,
    carSales,
    carSRents,
    setCarRents,
    setCarSales,
    setOpenModal,
    setopenModalEdit,
    setcarEdit,
    carEdit,
  };

  return (
    <Contexte.Provider value={contexteValues}>
      {openModalEdit && <ModalFormEdit />}

      <User>
        <div className='h-full p-11 overflow-auto '>
          {/* section statistique */}
          <Card_state />
          {/* section véhicule à vendre */}
          {carSales && (
            <div>
              <div className='mt-8 text-gray-100 flex items-center justify-between'>
                <h2 className=' text-lg '>
                  Liste des véhicules à vendre
                </h2>
                <div
                  onClick={() => setOpenModal(!OpenModal)}
                  className='btn hover:text-fuchsia-600'>
                  Ajouter un véhicule
                </div>
              </div>
              <div className='w-full h-80 mt-2 border overflow-auto bg-slate-600'>
                <Car carsales={carSales} />
              </div>
            </div>
          )}
          {/* section véhicule à louer */}
          {carSRents && (
            <div>
              <div className='mt-8 text-gray-100 flex items-center justify-between'>
                <h2 className=''>Liste des véhicules en location</h2>
                <div
                  onClick={() => setOpenModal(!OpenModal)}
                  className='btn hover:text-fuchsia-600'>
                  Ajouter un véhicule
                </div>
              </div>
              {OpenModal && <ModalAddCar/>}
              <div className='w-full h-80 mt-2 border overflow-auto bg-slate-600'>
                <Car carsales={carSRents} />
              </div>
            </div>
          )}
        </div>
      </User>
    </Contexte.Provider>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: '/wipauto/admin',
        permanent: false,
      },
    };
  }

  const Partner_name = session.user.name.username;
  let car_sale = {};
  let car_rent = {};

  const partenaire = await get_partner(Partner_name);

  const { _id, vente, location } = partenaire;

  if (location && vente) {
    car_sale = await get_car_sale(_id);
    car_rent = await get_carrent(_id);
  } else if (location && !vente) {
    car_rent = await get_carrent(_id);
  } else if (!location && vente) {
    car_sale = await get_car_sale(_id);
  }

  return {
    props: { session, partenaire, car_sale, car_rent },
  };
}
