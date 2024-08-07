// Components
import ErrorBoundary from "./ui/components/ErrorBoundary";

// Providers
import { ChakraProvider, QueryProvider, RouterProvider } from "@/lib/providers";

const App = () => {
  return (
    <QueryProvider>
      <ChakraProvider>
        <ErrorBoundary>
          <RouterProvider />
        </ErrorBoundary>
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
