import {
  Box,
  Center,
  Text,
  Wrap,
  WrapItem,
  Divider,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { get_particuliers_location } from "../../../../hooks/helpers";
import CardP from "../../../components/pages/CardP";
import Footer from "../../../components/pages/Footer";
import Header from "../../../components/pages/Header";

export default function Individual_Location({ individuals_location }) {
  // etat
  const [individuals, setIndividuals] = useState(individuals_location);
  const [value, setValue] = useState("");
  const [option, setOption] = useState(false);
  const route = useRouter();
  const href = route.asPath;
  const routesplice = route.asPath.split("/");
  const name = routesplice.findLast((element) => element);

  //action

  const fetch_data = async (e) => {
    const fetch_dealer_filter = await axios.get(
      `http://localhost:3000/api/location/individuals?commune=${e}`
    );
    setValue(e);
    setOption(true);
    setIndividuals(fetch_dealer_filter.data);
  };

  const disable = async () => {
    const fetch_dealer_filter = await axios.get(
      `http://localhost:3000/api/location/individuals`
    );
    setValue("");
    setOption(false);
    setIndividuals(fetch_dealer_filter.data);
  };

  return (
    <Box as="main" px={`20`}>
      {/* navigation menu */}
      <Header />
      {/*  */}
      <Box pt={`50px`} as="section">
        <Center fontFamily={`ubuntu`}>
          <Text fontSize={`36px`} lineHeight={`101px`} fontWeight={`700`}>
            Location {name}
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
                trouver, réserver et louer une voiture en toute
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
        <Box display={"flex"} justifyContent={"center"}>
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
        <Center mt={"20px"} display={"flex"} gap="20px">
          <Text>filtrez par commune</Text>
          <RadioGroup
            borderRadius={"20px"}
            bgColor={"#FEAF23"}
            onChange={(e) => fetch_data(e)}
            value={value}
            px="10px">
            <Stack direction="row">
              <Radio value="libreville">Libreville</Radio>
              <Radio value="akanda">Akanda</Radio>
              <Radio value="owendo">Owendo</Radio>
            </Stack>
          </RadioGroup>
          {option && <button onClick={disable}>Annule le filtre</button>}
        </Center>
        {/*  */}
      </Box>
      {/*  */}
      {individuals.map((individual) => (
        <CardP key={individual._id} val={individual} href={href} />
      ))}
      {/*  */}
      <Footer />
    </Box>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const individuals_location = await get_particuliers_location();

  return {
    props: { individuals_location },
  };
}
