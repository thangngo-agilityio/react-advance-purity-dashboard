import { ReactNode } from "react"
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react"

// Components
import Footer from "@/components/Footer"
import AuthForm from "@/components/AuthForm"

const SignUpPage = ({ children }: { children?: ReactNode }) => {


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
          <AuthForm isRegister />
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
        h='520px'
        borderRadius='lg'
        backgroundImage='/public/imgs/background-signup.svg'
        backgroundRepeat='no-repeat'
        backgroundSize='auto'
        objectFit='cover'
      />
    </VStack>
  )
}


export default SignUpPage

