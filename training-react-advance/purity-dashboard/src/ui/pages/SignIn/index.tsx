import { ReactNode } from "react"
import { Flex, VStack } from "@chakra-ui/react"

// Components
import Footer from "@/ui/components/Footer"
import AuthForm from "@/ui/components/AuthForm"
import { LogoChakra } from "@/ui/icons/logo-chakra"

const SignInPage = ({ children }: { children?: ReactNode }) => (
  <VStack position='relative' height='100%' gap='0px'>
    {children}
    <VStack w='988px' h='100%' pb='40px' gap='0' position='relative' zIndex={2} justifyContent='space-between'>
      <Flex w='100%' h='100%' alignItems='center' flex={2}>
        <AuthForm />
      </Flex>
      <Flex w='100%' h='100%' flex={1}>
        <Footer />
      </Flex>
    </VStack>
    <Flex
      position='absolute'
      zIndex={1}
      top={0}
      right={0}
      w="862px"
      h='872px'
      alignItems='center'
      justifyContent='center'
      borderBottomLeftRadius='25px'
      backgroundImage='/public/imgs/background-login.svg'
      backgroundRepeat='no-repeat'
      backgroundSize='100%'
      objectFit='cover'
    >
      <LogoChakra />
    </Flex>
  </VStack>
)

export default SignInPage

