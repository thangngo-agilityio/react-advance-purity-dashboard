import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Button from './lib/ui/components/common/Button';
import { theme } from './themes';
import InputFiled from './lib/ui/components/common/InputFiled';

const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <h1>Text</h1>
      <InputFiled placeholder='text'/>
    </ChakraProvider>
  )
}

export default App;
