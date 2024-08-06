import { memo } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

// Components
import Sidebar from '@/ui/components/Sidebar';
import Header from '@/ui/components/Header';


const MainLayout = () => {

  return (
    <Flex
      position="absolute"
      w="100dvw"
      h="100dvh"
      bgColor="gray.50"
      alignItems="stretch"
    >
      <Sidebar />

      <VStack flex={1} alignItems="stretch" overflow="hidden">
        <Header />
        <Box
          flex={1}
          overflowY="auto"
          px={30}
          pb={30}
          bgColor="background.table"
        >
          <Outlet />
        </Box>
      </VStack>
    </Flex>
  );
};

export default memo(MainLayout);
