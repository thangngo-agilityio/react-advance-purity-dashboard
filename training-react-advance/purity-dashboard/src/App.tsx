import { ChakraProvider, QueryProvider } from "./providers";



const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <QueryProvider>
      <ChakraProvider>

      </ChakraProvider>
    </QueryProvider>
  )
}

export default App;
