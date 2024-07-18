import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Button from './lib/ui/components/common/Button';
import { theme } from './themes';

const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <Button>
        Test
      </Button>
    </ChakraProvider>
  )
}

export default App;
