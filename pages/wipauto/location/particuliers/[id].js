import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Particular from "../../../../components/layout/Particular";

export default function Detail({ data }) {
  const [partner, setDealer] = useState(data);
   const route = useRouter();
   const routesplice = route.pathname.split("/");
   const [, , service, partners] = routesplice;

  return <Particular partner={partner} service={service} partners={partners} />;
}

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;

  const dealer = await axios.get(`http://localhost:3000/api/individuals/${id}`);
  const cars_rent = await axios.get(`http://localhost:3000/api/carrent/${id}`);
  dealer.data.carRent = await cars_rent.data;
  return {
    props: {
      data: dealer.data,
    },
  };
}
