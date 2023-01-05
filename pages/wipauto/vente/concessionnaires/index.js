import {
  Box,
  Center,
  Text,
  Wrap,
  WrapItem,
  Divider,
  Radio,
  RadioGroup,
  Button,
  Stack,
} from "@chakra-ui/react";

import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import CardP from "../../../components/pages/vente/CardP";
import Header from "../../../components/pages/Header";
import Footer from "../../../components/pages/Footer";
import { get_concessionnaires_vente } from "../../../../hooks/helpers";
import axios from "axios";

export default function VenteConcessionnaires({ CONCESSIONNAIRE_VENTE }) {
  // etat
  const [events, setEvents] = useState(CONCESSIONNAIRE_VENTE);
  const route = useRouter();
  const href = route.asPath
  const [value, setValue] = useState("");
  const [option, setOption] = useState(false);
  console.log(route);

  // action
  const fetch_data = async (e) => {
    const fetch_dealer_filter = await axios.get(
      `http://localhost:3000/api/vente/dealers?commune=${e}`
    );
    setValue(e);
    setOption(true);
    setEvents(fetch_dealer_filter.data);
  };

  const disable = async () => {
    const fetch_dealer_filter = await axios.get(
      `http://localhost:3000/api/vente/dealers`
    );
    setValue("");
    setOption(false);
    setEvents(fetch_dealer_filter.data);
  };

  // affichage

  return (
    <Box as="main" px={"20"}>
      <Header />

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
        <Box>
          <Center fontFamily={`ubuntu`}>
            <Text fontSize={`36px`} lineHeight={`101px`} fontWeight={`700`}>
              Trouver des vendeurs par commune
            </Text>
          </Center>
        </Box>
        {/*  */}
        <Divider />

        {/*  */}
        <RadioGroup
          onChange={(e) => fetch_data(e)}
          value={value}
          padding="25px">
          <Stack direction="row">
            <Radio value="libreville">Libreville</Radio>
            <Radio value="akanda">Akanda</Radio>
            <Radio value="owendo">Owendo</Radio>
            {option && <button onClick={disable}>Annule le filtre</button>}
          </Stack>
        </RadioGroup>
        {/*  */}
        {events.map((val) => (
          <CardP key={val._id} val={val} href={href} />
        ))}

        {/*  */}
      </Box>

      <Footer />
    </Box>
  );
}

export async function getServerSideProps() {
  const CONCESSIONNAIRE_VENTE = await get_concessionnaires_vente();

  return {
    props: {
      CONCESSIONNAIRE_VENTE,
    },
  };
}
