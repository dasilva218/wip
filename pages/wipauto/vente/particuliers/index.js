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
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { get_particuliers_vente } from "../../../../hooks/helpers";
import Footer from "../../../components/pages/Footer";
import Header from "../../../components/pages/Header";
import CardP from "../../../components/pages/vente/CardP";

export default function VenteIndividuals({ individuals_vente }) {
  const [events, setEvents] = useState(individuals_vente);
  const [value, setValue] = useState("");
  const [option, setOption] = useState(false);
  const route = useRouter()
  const href = route.asPath;

  const fetch_data = async (e) => {
    const fetch_dealer_filter = await axios.get(
      `http://localhost:3000/api/vente/individuals?commune=${e}`
    );
    setValue(e);
    setOption(true);
    setEvents(fetch_dealer_filter.data);
  };

  const disable = async () => {
    const fetch_dealer_filter = await axios.get(
      `http://localhost:3000/api/vente/individuals`
    );
    setValue("");
    setOption(false);
    setEvents(fetch_dealer_filter.data);
  };

  return (
    <Box as="main" px={"20"}>
      <Header />
      <Box as="section" pt={"50px"}>
        {/*  */}
        <Center fontFamily={`ubuntu`}>
          <Text fontSize={`36px`} lineHeight={`101px`} fontWeight={`700`}>
            Vente Particuliers
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
  const individuals_vente = await get_particuliers_vente();

  return {
    props: {
      individuals_vente,
    },
  };
}
