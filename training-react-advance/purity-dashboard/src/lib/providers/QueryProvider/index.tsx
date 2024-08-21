import { memo, ReactNode } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';


export const queryClient = new QueryClient({
  defaultOptions: {},
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

const QueryProvider = ({ children }: { children?: ReactNode }) => (
  <PersistQueryClientProvider
    client={queryClient}
    persistOptions={{
      persister,
    }}
  >
    {children}
  </PersistQueryClientProvider>
);

export default QueryProvider;
