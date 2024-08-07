import { memo } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

// Components
import Sidebar from '@/ui/components/Sidebar';
import Footer from '@/ui/components/Footer';

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
        <Box
          flex={1}
          overflowY="auto"
          px={30}
          pb={30}
          bgColor="background.table"
        >
          <Outlet />
        </Box>
        <Footer isAuth />
      </VStack>
    </Flex>
  );
};

export default memo(MainLayout);
