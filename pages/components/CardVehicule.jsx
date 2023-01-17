import {
  Card,
  Icon,
  Flex,
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
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { IconContext } from "react-icons";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function CardVehicule({
  item,
  compare,
  service,
  partners,
  action,
}) {
  function numStr(a, b) {
    a = "" + a;
    b = b || " ";
    var c = "",
      d = 0;
    while (a.match(/^0[0-9]/)) {
      a = a.substr(1);
    }
    for (var i = a.length - 1; i >= 0; i--) {
      c = d != 0 && d % 3 == 0 ? a[i] + b + c : a[i] + c;
      d++;
    }
    return c;
  }

  return (
    <Card maxW="296px" bg={"facebook.600"} border={"1px"} boxShadow={"dark-lg"}>
      <CardBody>
        <Box border={"1px"} h="150px">
          <Image alt="logo" boxSize="100%" objectFit="cover" src={item.img} />
        </Box>
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.marque}</Heading>
          <Text>{item.model}</Text>
          <HStack>
            <Image src={`/transmission.svg`} alt="logo certifé" height="20px" />
            <Text>{item.transmission}</Text>
          </HStack>
          <HStack>
            <Image src={`/portiere.svg`} alt="logo certifé" height="20px" />
            <Text>{item.portiere}</Text>
          </HStack>
          <HStack>
            <Image
              src={`/pompe-a-petrole.png`}
              alt="logo certifé"
              height="25px"
            />
            <Text>{item.fuel}</Text>
          </HStack>
          <HStack></HStack>
        </Stack>
      </CardBody>

      <Center>
        <CardFooter>
          {compare ? (
            <HStack>
              <Text color="yellow" fontSize="md">
                {numStr(item.prix)} {service === "vente" ? " " : "/ jours"}
              </Text>
              <Button
                onClick={() => action(item.foreign_key_partners)}
                variant="solid"
                colorScheme="blue">
                details
              </Button>
            </HStack>
          ) : (
            <HStack spacing={43}>
              <Text color="yellow" fontSize="md">
                {numStr(item.prix)} {service === "vente" ? " " : "/ jours"}
              </Text>
              <Link
                href={`/wipauto/location/compare?marque=${item.marque}&model=${item.model}&service=${service}&partner=${partners}`}>
                <HStack>
                  <Text color={"yellow"}>Comparez</Text>
                  <IconContext.Provider value={{ color: "yellow" }}>
                    <FaLongArrowAltRight />
                  </IconContext.Provider>
                </HStack>
              </Link>
            </HStack>
          )}
        </CardFooter>
      </Center>
    </Card>
  );
}
