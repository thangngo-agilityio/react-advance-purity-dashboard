import { ReactNode, useCallback, useEffect } from "react"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { v4 as uuidv4 } from 'uuid';

// Components
import Footer from "@/ui/components/Footer"
import AuthForm from "@/ui/components/AuthForm"
import { useForm } from "react-hook-form"
import { AuthFormData, TUser } from "@/lib/types"
import { useAuthLogin, useAuthRegister } from "@/lib/hooks/useAuth"
import { authStore } from "@/lib/stores"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/constants";

const SignUpPage = ({ children }: { children?: ReactNode }) => {

  const { users } = useAuthLogin();
  const { createAccount } = useAuthRegister();
  const setUser = authStore((state) => state.setUser);
  const navigate = useNavigate()

  const {
    control,
    handleSubmit
  } = useForm<AuthFormData>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleCreateAccount = useCallback(
    async (data: AuthFormData) => {
      try {
        const isUser = users?.some((user) => user.fields.email === data.email);

        if (isUser) {
          console.log('SIGN_UP_FAILED')
        } else {
          const payload: TUser[] = [{
            fields: {
              name: data.name,
              email: data.email,
              password: data.password,
            },
          }];

          await createAccount({ records: payload });

          setUser(data);

          console.log('Success')

          navigate(ROUTES.SIGN_IN);
        }
      } catch (error) {
        throw error
      }
    },
    [createAccount, navigate, setUser, users],
  );

  const onSubmit = useCallback((data: AuthFormData) => {
    handleCreateAccount(data)
  }, [handleCreateAccount]);


  return (
    <VStack position='relative' height='100%' gap='0px'>
      {children}
      <VStack w='988px' h='100%' pb='40px' gap='0' position='relative' zIndex={2} justifyContent='space-between'>
        <VStack w='100%' h='100%' alignItems='center' justifyContent='center' flex={6}>
          <VStack width='333px' mb='66px'>
            <Heading size='xl' variant='secondary'>
              Welcome!
            </Heading>
            <Text textAlign='center' variant='secondary'>
              Use these awesome forms to login or create new account in your project for free.
            </Text>
          </VStack>
          <AuthForm isRegister control={control} handleSubmit={handleSubmit(onSubmit)} />
        </VStack>
        <Flex w='100%' h='100%' flex={1}>
          <Footer />
        </Flex>
      </VStack>
      <Box
        position='absolute'
        zIndex={1}
        top='24px'
        w='98%'
        h={{ base: 100, md: 220, xl: 320, '2xl': 420, '5xl': 520 }}

        borderRadius='lg'
        backgroundImage='/public/imgs/background-signup.svg'
        backgroundRepeat='no-repeat'
        backgroundSize='100%'
        objectFit='cover'
      />
    </VStack>
  )
}


export default SignUpPage

