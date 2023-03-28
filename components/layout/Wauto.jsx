import { Box } from '@chakra-ui/react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

function Wauto({ children }) {
  return (
    <>
      <Box as='main'pb={10} px={`20`} bgColor={'gray.600'}>
        <Header />
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Wauto;
