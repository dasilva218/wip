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
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import CardVehicule from "../CardVehicule";

function Particular({ partner, service, partners }) {
  /**
   * ! state
   */
  const route = useRouter();
  const mp = service === "vente" ? partner.carSale : partner.carRent;
  console.log(service, partners);
  /**
   * ! affichage
   */
  return (
    <Flex border={"1px"} h="100vh" bg={"messenger.900"}>
      {/*  */}
      <Flex
        flex="1 1 30%"
        bg={"whatsapp.300"}
        border={"1px"}
        flexDirection={"column"}
        gap="30px"
        alignItems="center"
        padding={"15px"}>
        <button type="button" onClick={() => route.back()}>
          <Box display={"flex"} gap="2" alignItems="center">
            <BiArrowBack />
            Retour
          </Box>
        </button>
        <Text fontSize={"xx-large"}>{partners}</Text>
        <Image
          boxSize="150px"
          objectFit="cover"
          src={partner.logo}
          alt={partner.name}
        />
        <Heading>{partner.name}</Heading>
        <Box>
          <Text fontSize={"x-large"}>
            Tel : {partner.telephone.map((tel) => tel + " / ")}
          </Text>
          <Text fontSize={"x-large"}>
            Email: {partner.email.map((mail) => `${mail} / `)}
          </Text>
        </Box>
      </Flex>
      {/*  */}
      <Box border={"1px"} overflow="auto" borderColor="red" flex="1 1 70%">
        {/*  */}
        <Box display={"flex"} justifyContent={"center"}>
          <Center w={"994px"} h={"50px"} fontFamily={`ubuntu`}>
            <Text fontSize={`30px`} lineHeight={`101px`} fontWeight={`700`}>
              <Box as="span" color={"#FEAF23"}>
                Liste des véhicules
              </Box>{" "}
            </Text>
          </Center>
        </Box>
        {/*  */}
        <Wrap gap={"36px"}>
          {mp.map((car) => (
            <WrapItem key={car._id}>
              <CardVehicule item={car} service={service} partners={partners} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </Flex>
  );
}

export default Particular;
