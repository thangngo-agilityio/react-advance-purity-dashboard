import { ChakraProvider, QueryProvider, RouterProvider } from "./lib/providers";

const App = () => {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <QueryProvider>
      <ChakraProvider>
        <RouterProvider />
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
