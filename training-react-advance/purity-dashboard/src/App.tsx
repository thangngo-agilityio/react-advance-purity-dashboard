// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

// Theme
import { theme } from './themes';

import InputFiled from './lib/ui/components/common/InputFiled';

const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <InputFiled label='text' placeholder='text' />
    </ChakraProvider>
  )
}

export default App;
