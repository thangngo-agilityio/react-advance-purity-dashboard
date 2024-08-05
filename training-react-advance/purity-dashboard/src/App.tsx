import { ChakraProvider, QueryProvider, RouterProvider } from "@/lib/providers";

const App = () => {
  return (
    <QueryProvider>
      <ChakraProvider>
        <RouterProvider />
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
