import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Center,
  Button,
  Stack,
  Heading,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

export default function CardVehicule({ item }) {
  return (
    <Card maxW="296px">
      <CardBody>
        <Box w="100%" h={"163px"}>
          <Image
            borderRadius={"full"}
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            alt="logo"
            src={item.img}
          />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.marque}</Heading>
          <Text>{item.model}</Text>
          <Text>{item.fuel}</Text>
          <Text>{item.transmission}</Text>
          <Text color="blue.600" fontSize="2xl">
            {item.prix} / jours
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <Center>
        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            comparer
          </Button>
        </CardFooter>
      </Center>
    </Card>
  );
}
