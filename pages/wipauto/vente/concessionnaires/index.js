import { Box, Center, Text, Wrap, WrapItem, Divider } from "@chakra-ui/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import CardP from "../../../components/pages/CardP";
import { get_concessionnaires_vente } from "../../../../hooks/helpers";
import axios from "axios";
import Wauto from "../../../components/layout/Wauto";
import DisplayPartners from "../../../components/layout/DisplayPartners";
import Radio_group from "../../../components/Radio";

export default function VenteConcessionnaires({ CONCESSIONNAIRE_VENTE }) {
  // etat
  const [dealers, setDealers] = useState(CONCESSIONNAIRE_VENTE);
  const route = useRouter();
  const href = route.asPath;
  const routesplice = route.asPath.split("/");
  const name = routesplice.findLast((element) => element);

  // action
  const filter = async (target) => {
    return await axios.get(
      `http://localhost:3000/api/vente/dealers?commune=${target}`
    );
  };

  const disable = async () => {
    return await axios.get(`http://localhost:3000/api/vente/dealers`);
  };

  // affichage

  return (
    <Wauto>
      <Box as="section" pt={"50px"}>
        {/*  */}
        <Center fontFamily={`ubuntu`}>
          <Text fontSize={`36px`} lineHeight={`101px`} fontWeight={`700`}>
            Vente Concessionnaires
          </Text>
        </Center>
        {/*  */}
        <Box>
          <Wrap mt={`50px`}>
            <WrapItem fontFamily={`ubuntu`} w={`613px`} h={`303px`}>
              {" "}
              <Text
                _after={{
                  content: `url("/underline.svg")`,
                  right: 220,
                  bottom: -20,
                  position: "absolute",
                  transform: `rotate(180deg)`,
                }}
                position={`relative`}
                fontWeight={`700`}
                fontSize={`54px`}
                lineHeight={`80px`}>
                trouver, réserver et acheter un véhicules en toute
                <Box as="span" color={`#FEAF23`}>
                  {" "}
                  simplicité
                </Box>
              </Text>{" "}
            </WrapItem>
            <WrapItem flex={`1 1 0`} position={`relative`} w={`100%`}>
              <Image src={`/voiture.svg`} fill alt="voiture" />
            </WrapItem>
          </Wrap>
        </Box>
        {/*  */}
        <Box mt={"20px"} display={"flex"} justifyContent={"center"}>
          <Center bg={"#888686"} w={"994px"} h={"50px"} fontFamily={`ubuntu`}>
            <Text fontSize={`30px`} lineHeight={`101px`} fontWeight={`700`}>
              <Box as="span" color={"#FEAF23"}>
                Liste
              </Box>{" "}
              {name}
            </Text>
          </Center>
        </Box>
        {/*  */}
        <Divider mt={"20px"} />

        {/*  */}
        <Radio_group
          setDealers={setDealers}
          filter={filter}
          disableB={disable}
        />
        {/*  */}
        <DisplayPartners>
          {dealers.map((val) => (
            <CardP key={val._id} val={val} href={href} />
          ))}
        </DisplayPartners>

        {/*  */}
      </Box>
    </Wauto>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const CONCESSIONNAIRE_VENTE = await get_concessionnaires_vente();

  return {
    props: {
      CONCESSIONNAIRE_VENTE,
    },
  };
}
