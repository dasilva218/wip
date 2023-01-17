import axios from "axios";
import {
  Wrap,
  Image,
  WrapItem,
  Box,
  Flex,
  Text,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Center,
} from "@chakra-ui/react";
import CardVehicule from "../../../components/CardVehicule";
import { useState } from "react";
import { useRouter } from "next/router";
import Particular from "../../../components/layout/Particular";

export default function Detail({ data }) {
  const [partner, setPartner] = useState(data);
  const route = useRouter();
  const routesplice = route.pathname.split("/");
  const [, , service, partners] = routesplice;

  return <Particular partner={partner} service={service} partners={partners} />;
}

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;

  const dealer = await axios.get(`http://localhost:3000/api/individuals/${id}`);
  const cars_Sale = await axios.get(`http://localhost:3000/api/carsale/${id}`);
  dealer.data.carSale = await cars_Sale.data;
  return {
    props: {
      data: dealer.data,
    },
  };
}
