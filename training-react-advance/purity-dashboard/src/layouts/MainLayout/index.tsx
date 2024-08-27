import { ReactNode } from 'react';
import { Box, Flex, useBreakpointValue, VStack } from '@chakra-ui/react';

// Components
import { Footer } from '@/components';
import { ExpandSidebar, Indicator, Sidebar } from '@/components';

// Hooks
import { useAuthLogout } from '@/hooks';

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
