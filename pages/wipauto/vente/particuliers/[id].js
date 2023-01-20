import axios from 'axios';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Particular from '../../../../components/layout/Particular';
import {
  get_car_sale,
  get_individual,
} from '../../../../hooks/helpers';

export default function Detail({ data }) {
  const [partner, setPartner] = useState(data);
  const route = useRouter();
  const routesplice = route.pathname.split('/');
  const [, , service, partners] = routesplice;

  return (
    <Particular
      partner={partner}
      service={service}
      partners={partners}
    />
  );
}

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;

  const dealer = await get_individual(id);
  const cars_Sale = await get_car_sale(id);
  dealer.carSale = await cars_Sale;
  return {
    props: {
      data: dealer,
    },
  };
}
