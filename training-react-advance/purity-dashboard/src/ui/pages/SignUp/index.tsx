import { ReactNode, useCallback } from 'react';
import { Box, Flex, Heading, Text, useToast, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Components
import Footer from '@/ui/components/Footer';
import AuthForm from '@/ui/components/AuthForm';

// Constants
import { ROUTES } from '@/lib/constants';

// Types
import { AuthFormData, TUser } from '@/lib/types';

// Hooks
import { useAuthLogin, useAuthRegister } from '@/lib/hooks/useAuth';

// Stores
import { authStore } from '@/lib/stores';
import { ERROR_MESSAGES, SUCCESS_MESSAGE } from '@/lib/constants/message';

const SignUpPage = ({ children }: { children?: ReactNode }) => {
  const { users } = useAuthLogin();
  const { createAccount } = useAuthRegister();
  const setUser = authStore((state) => state.setUser);
  const navigate = useNavigate();
  const toast = useToast();

  const handleCreateAccount = useCallback(
    async (data: AuthFormData) => {
      try {
        const isUser = users?.records.some((user) => user.fields.email === data.email);

        if (isUser) {
          toast({
            title: ERROR_MESSAGES.CREATE_ACCOUNT,
            description: ERROR_MESSAGES.ACCOUNT_CREATED,
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        } else {
          const payload: TUser[] = [
            {
              fields: {
                name: data.name,
                email: data.email,
                password: data.password,
              },
            },
          ];

          await createAccount({ records: payload });

          toast({
            title: SUCCESS_MESSAGE.TITLE_MESSAGE_CREATE('Account'),
            description: SUCCESS_MESSAGE.ACCOUNT_SUCCESS,
            status: 'success',
            duration: 2000,
            isClosable: true,
          })

          navigate(ROUTES.SIGN_IN);
        }
      } catch (error) {
        throw error;
      }
    },
    [createAccount, navigate, setUser, users],
  );

  const onSubmit = useCallback(
    (data: AuthFormData) => {
      handleCreateAccount(data);
    },
    [handleCreateAccount],
  );

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
        <VStack
          w="100%"
          h="100%"
          alignItems="center"
          justifyContent="center"
          flex={6}
        >
          <VStack width="333px" mb="66px">
            <Heading size="xl" variant="secondary">
              Welcome!
            </Heading>
            <Text textAlign="center" variant="secondary">
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </VStack>
          <AuthForm isRegister onSubmit={onSubmit} />
        </VStack>
        <Flex w="100%" h="100%" flex={1}>
          <Footer />
        </Flex>
      </VStack>
      <Box
        position="absolute"
        zIndex={1}
        top="24px"
        w="98%"
        h={{ base: 100, md: 220, xl: 320, '2xl': 420, '5xl': 520 }}
        borderRadius="lg"
        backgroundImage="/imgs/background-signup.svg"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
        objectFit="cover"
      />
    </VStack>
  );
};

export default SignUpPage;
