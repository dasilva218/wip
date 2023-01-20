import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Particular from '../../../../components/layout/Particular';
import { get_carrent, get_dealer } from '../../../../hooks/helpers';

export default function Detail({ data }) {
  const [partner, setDealer] = useState(data);
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

  const dealer = await get_dealer(id);

  const cars_rent = await get_carrent(id);

  dealer.carRent = await cars_rent;

  return {
    props: {
      data: dealer,
    },
  };
}
