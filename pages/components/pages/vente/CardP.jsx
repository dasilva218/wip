import {
  Card,
  Stack,
  Heading,
  Image,
  Text,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";

function CardP({ val, href }) {
  return (
    <div>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline">
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={val.logo}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              {val.name}
            </Heading>
            <Text>Tel : {val.telephone.map((tel) => `${tel} / `)}</Text>
            <Text>email : {val.email}</Text>
            <Text>Quartier : {val.quartier} </Text>{" "}
            {val.horaire ? (
              <Text>
                Horaire:{" "}
                <span>
                  ouvert de {val.horaire.ouverture} à {val.horaire.fermeture} h
                </span>
              </Text>
            ) : (
              ""
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
    </div>
  );
}

export default CardP;
