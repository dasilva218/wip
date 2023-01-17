import { Center, SimpleGrid } from "@chakra-ui/react";

function DisplayPartners({ children }) {
  return (
    <Center mt={"8"}>
      <SimpleGrid
        maxWidth={"90%"}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
        {children}
      </SimpleGrid>
    </Center>
  );
}

export default DisplayPartners;
