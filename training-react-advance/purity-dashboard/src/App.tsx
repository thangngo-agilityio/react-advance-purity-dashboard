// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from './themes';
import Footer from './lib/ui/components/Footer';


const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Footer />
    </ChakraProvider>
  )
}

export default App;
