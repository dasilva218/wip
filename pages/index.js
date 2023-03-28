import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import Header from './../components/pages/Header';
import HomeChild from './../components/pages/HomeChild';

export default function Home() {
  return (
    <Box
      // bgColor={'gray.600'}
      overflow={'hidden'}
      display={`flex`}
      flexDirection={`column`}
      as='main'
      px={[4, 20]}
      height={{ base: '100vh' }}>
      <HomeChild />
    </Box>
  );
}
