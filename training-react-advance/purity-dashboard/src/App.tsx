import { Suspense } from 'react';

// Providers
import { ChakraProvider, QueryProvider, RouterProvider } from '@/lib/providers';

// components
import { LoadingIndicator } from './ui';

const App = () => {
  return (
    <QueryProvider>
      <ChakraProvider>
        <Suspense fallback={<LoadingIndicator />}>
          <RouterProvider />
        </Suspense>
      </ChakraProvider>
    </QueryProvider>
  );
};

export default App;
