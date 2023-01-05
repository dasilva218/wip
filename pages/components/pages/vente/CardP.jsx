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
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">
              {(val.dealer_name ? val.dealer_name : val.individual_name)}
            </Heading>
            <Text>Tel : {val.tel.map((tel) => `${tel} / `)}</Text>
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
