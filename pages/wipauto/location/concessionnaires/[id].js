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

export default function Detail({ data }) {
  const [partner, setDealer] = useState(data);
  console.log(partner.carRent);
  return (
    <>
      <Flex border={"1px"} flexWrap="wrap">
        {/*  */}
        <Flex
          border={"1px"}
          w="20%"
          flexDirection={"column"}
          alignItems="center"
          padding={"15px"}>
          <Image
            boxSize="150px"
            objectFit="cover"
            src="https://img.freepik.com/vecteurs-premium/logo-autosales_20448-71.jpg"
            alt="Dan Abramov"
          />
          <Heading>
            {partner.dealer_name
              ? partner.dealer_name
              : partner.individual_name}
          </Heading>
          <Text>Tel : {partner.tel.map((tel) => tel + " / ")}</Text>
          <Text>Email: {partner.email.map((mail) => `${mail} / `)}</Text>
        </Flex>
        {/*  */}
        <Box border={"1px"} flex="1 1 0">
          {/*  */}
          <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
              <BreadcrumbLink href="/wipauto/location/concessionnaires">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Current</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          {/*  */}
          <Wrap>
            {partner.carRent.map((car) => (
              <WrapItem key={car._id}>
                <Center>
                  <CardVehicule item={car} />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Flex>
    </>
  );
}

export async function getServerSideProps({ req, res, query }) {
  const { id } = query;

  const dealer = await axios.get(`http://localhost:3000/api/dealers/${id}`);
  const cars_rent = await axios.get(`http://localhost:3000/api/carrent/${id}`);
  dealer.data.carRent = await cars_rent.data;
  return {
    props: {
      data: dealer.data,
    },
  };
}
