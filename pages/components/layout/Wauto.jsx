import { Box } from "@chakra-ui/react";
import Footer from "../pages/Footer";
import Header from "../pages/Header";

function Wauto({children}) {
    return (
      <Box as="main" px={`80`}>
        <Header />
        {children}
        <Footer />
      </Box>
    );
}

export default Wauto;