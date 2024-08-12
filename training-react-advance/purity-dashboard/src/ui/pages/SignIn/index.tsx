import { ReactNode, useCallback, useState } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Components
import Footer from '@/ui/components/Footer';
import AuthForm from '@/ui/components/AuthForm';
import { LogoChakra } from '@/ui/icons/logo-chakra';

// Hooks
import { useAuthLogin } from '@/lib/hooks';

// Constants
import { ROUTES } from '@/lib/constants';
import { ERROR_MESSAGES } from '@/lib/constants/message';

// Types
import { AuthFormData } from '@/lib/types';

// Store
import { authStore } from '@/lib/stores';

// Utils
import { formatUppercaseFirstLetter } from '@/lib/utils';

const SignInPage = ({ children }: { children?: ReactNode }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const setUser = authStore((state) => state.setUser);

  const { users } = useAuthLogin();

  // Sign in api
  const handleUserSignIn = useCallback(
    (data: AuthFormData): void => {
      const res = users?.find(
        (user) =>
          user.fields.email === data.email &&
          user.fields.password === data.password,
      );
      console.log('res', res);
      if (res) {
        setUser({ user: res });
        navigate(ROUTES.TABLES);
      } else {
        setErrorMessage(
          formatUppercaseFirstLetter(ERROR_MESSAGES.AUTH_INCORRECT),
        );
      }
    },
    [users, navigate, setUser],
  );

  const onSubmit = useCallback(
    (data: AuthFormData) => {
      handleUserSignIn(data);
    },
    [handleUserSignIn],
  );

  const handleResetError = useCallback(() => {
    setErrorMessage('');
  }, []);

  return (
    <VStack position="relative" height="100%" gap="0px">
      {children}
      <VStack
        w="988px"
        h="100%"
        pb="40px"
        gap="0"
        position="relative"
        zIndex={2}
        justifyContent="space-between"
      >
        <Flex w="100%" h="100%" alignItems="center" flex={2}>
          <AuthForm
            onSubmit={onSubmit}
            errorMessage={errorMessage}
            handleClearRootError={handleResetError}
          />
        </Flex>
        <Flex w="100%" h="100%" flex={1}>
          <Footer />
        </Flex>
      </VStack>
      <Flex
        position="absolute"
        zIndex={1}
        top={0}
        right={0}
        w="862px"
        h="872px"
        alignItems="center"
        justifyContent="center"
        borderBottomLeftRadius="25px"
        backgroundImage="/imgs/background-login.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
        objectFit="cover"
      >
        <LogoChakra />
      </Flex>
    </VStack>
  );
};

export default SignInPage;
