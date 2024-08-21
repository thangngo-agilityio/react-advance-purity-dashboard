import { memo, ReactNode } from 'react';
import { Box, Flex, useBreakpointValue, VStack } from '@chakra-ui/react';

// Components
import Footer from '@/ui/components/Footer';
import { useAuthLogout } from '@/lib/hooks';
import { ExpandSidebar, Indicator, Sidebar } from '@/ui/components';

export type TMainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: TMainLayoutProps) => {
  const { isLogoutHandling, signOut } = useAuthLogout();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <Indicator isOpen={isLogoutHandling}>
      <Flex
        position="absolute"
        w="100dvw"
        h="100dvh"
        bgColor="gray.50"
        alignItems="stretch"
      >
        {isMobile ? <ExpandSidebar onSignOut={signOut} /> : <Sidebar onSignOut={signOut} />}

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
  );
};

export default MainLayout;
