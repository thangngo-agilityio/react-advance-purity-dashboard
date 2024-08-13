import { Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';

// Providers
import { ChakraProvider, QueryProvider, RouterProvider } from '@/lib/providers';

const App = () => {
  return (
    <QueryProvider>
      <ChakraProvider>
        <Suspense fallback={<Spinner />}>
          <RouterProvider />
        </Suspense>
      </ChakraProvider>
    </QueryProvider>
  );
};

export default App;
