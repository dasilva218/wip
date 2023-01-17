import { Box } from "@chakra-ui/react";
import Header from "./../components/pages/Header";
import HomeChild from "./../components/pages/HomeChild";

export default function Home() {
  return (
    <Box
      bgColor={"#252523"}
      display={`flex`}
      flexDirection={`column`}
      as="main"
      px={20}
      height={"100vh"}>
      <Header page={`home`} />
      <HomeChild />
    </Box>
  );
}
