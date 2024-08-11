import { memo, ReactElement } from 'react';
import { Box, Flex, VStack } from '@chakra-ui/react';

// Components
import Sidebar from '@/ui/components/Sidebar';
import Footer from '@/ui/components/Footer';
import { useAuthLogout } from '@/lib/hooks';
import { Indicator } from '@/ui/components';

export type TMainLayoutProps = {
  children: ReactElement;
};

const MainLayout = ({ children }: TMainLayoutProps) => {
  const { isLogoutHandling, signOut } = useAuthLogout();
  return (
    <>
      <Indicator isOpen={isLogoutHandling}>
        <Flex
          position="absolute"
          w="100dvw"
          h="100dvh"
          bgColor="gray.50"
          alignItems="stretch"
        >
          <Sidebar onSignOut={signOut} />

          <VStack flex={1} alignItems="stretch" overflow="hidden">
            <Box
              flex={1}
              overflowY="auto"
              px={30}
              pb={30}
              bgColor="background.table"
            >
              {children}
            </Box>
            <Footer isAuth />
          </VStack>
        </Flex>
      </Indicator>
    </>
  );
};

export default memo(MainLayout);
