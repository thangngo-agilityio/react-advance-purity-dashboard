// Libs
import { createWithEqualityFn } from 'zustand/traditional';
import { persist } from 'zustand/middleware';

// Types
import { TRecordUser } from '../types';

type TAuthState = {
  user: TRecordUser | null;
};

export type TAuthAction = {
  setUser: (data: Partial<TAuthState>) => void;
  removeUser: () => void;
};

const initialState: TAuthState = {
  user: null,
};

// Create the store
// Read zustand
export const authStore = createWithEqualityFn(
  persist<TAuthState & TAuthAction>(
    (set) => ({
      ...initialState,
      setUser: (data: Partial<TAuthState>) =>
        set((state) => ({ ...state, ...data })),
      removeUser: () => {
        set(initialState);
        // Remove
        // authStore.persist.clearStorage();
      },
    }),
    {
      name: 'auth',
    },
  ),
);
