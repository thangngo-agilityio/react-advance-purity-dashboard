// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from './themes';
import { Navigation } from './lib/ui';
import { PhoneIcon } from '@chakra-ui/icons';


const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Navigation leftIcon={<PhoneIcon />} isActive={true}>
        text
      </Navigation>
    </ChakraProvider>
  )
}

export default App;
