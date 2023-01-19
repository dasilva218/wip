import { Box } from '@chakra-ui/react';
import Header from './../components/pages/Header';
import HomeChild from './../components/pages/HomeChild';

export default function Home() {
  return (
    <Box
      
      overflow={'hidden'}
      bgColor={'#252523'}
      display={`flex`}
      flexDirection={`column`}
      as='main'
      px={[4, 20]}
      height={{ base: '100vh' }}>
      <Header page={`home`} />
      <HomeChild />
    </Box>
  );
}
