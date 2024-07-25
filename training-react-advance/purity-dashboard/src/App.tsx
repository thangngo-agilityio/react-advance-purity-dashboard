// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from './themes';
import AuthForm from './lib/ui/components/AuthForm';


const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <AuthForm />
    </ChakraProvider>
  )
}

export default App;
