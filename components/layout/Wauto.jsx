import { Box } from '@chakra-ui/react';
import Footer from '../pages/Footer';
import Header from '../pages/Header';

function Wauto({ children }) {
  return (
    <>
      <Box as='main' px={`20`} bgColor={'#252523'}>
        <Header />
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Wauto;
