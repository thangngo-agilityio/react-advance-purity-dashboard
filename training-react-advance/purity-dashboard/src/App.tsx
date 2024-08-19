import { Suspense } from 'react';
import { Text } from '@chakra-ui/react';

// Providers
import { ChakraProvider, QueryProvider, RouterProvider } from '@/lib/providers';

// components
import { ErrorBoundary, LoadingIndicator } from './ui';

const App = () => {
  return (
    <QueryProvider>
      <ChakraProvider>
        <ErrorBoundary fallback={<Text textAlign="center">Something went wrong</Text>}>
          <Suspense fallback={<LoadingIndicator />}>
            <RouterProvider />
          </Suspense>
        </ErrorBoundary>
      </ChakraProvider>
    </QueryProvider>
  );
};

export default App;
