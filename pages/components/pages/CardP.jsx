import {
  Card,
  Stack,
  Heading,
  Image,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

function CardP({ val, href }) {
  const [ver, setVer] = useState([val]);
  console.log(ver);
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline">
        <Image
          borderRadius="full"
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src="https://img.freepik.com/vecteurs-premium/logo-autosales_20448-71.jpg"
          alt="logo"
        />

        <Stack>
          <CardBody>
            {val.dealer_name ? (
              <Heading size="md">{val.dealer_name}</Heading>
            ) : (
              <Heading size="md">{val.individual_name}</Heading>
            )}

            <Text>Tel : {val.tel.map((h) => h + " / ")}</Text>
            <Text>email : {val.email}</Text>
            <Text>Quartier : {val.quartier}</Text>
            {val.horaire && (
              <div>
                {" "}
                <Text>
                  Horaire:{" "}
                  <span>
                    ouvert de {val.horaire.ouverture} à {val.horaire.fermeture}h
                  </span>
                </Text>
              </div>
            )}
          </CardBody>

          <CardFooter>
            <Link href={`${href}/${val._id}`}>
              <Button variant="solid" colorScheme="blue">
                VOIR LES VEHICULES
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
}

export default CardP;
