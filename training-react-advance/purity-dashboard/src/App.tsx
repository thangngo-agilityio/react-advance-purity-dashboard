// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from './themes';
import Header from './lib/ui/components/Header';


const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default App;
