// Libs
import { createWithEqualityFn } from 'zustand/traditional';
import { createJSONStorage, persist, StateStorage } from 'zustand/middleware';

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

// Create custom storage implementation
const myStore: () => StateStorage = () => ({
  getItem: (key: string) => {
    const response = localStorage.getItem(key);
    return response ? response : JSON.stringify(initialState);
  },
  setItem: (key: string, value: string) => {
    const parsedValue: TAuthState = JSON.parse(value);
    const hasUser =
      !!parsedValue.user && Object.keys(parsedValue.user).length > 0;

    if (hasUser) {
      localStorage.setItem(key, value);
    } else {
      localStorage.removeItem(key);
    }
  },
  removeItem: (key: string) => {
    localStorage.removeItem(key);
  },
});

// Create the store
export const authStore = createWithEqualityFn(
  persist<TAuthState & TAuthAction>(
    (set) => ({
      ...initialState,
      setUser: (data: Partial<TAuthState>) =>
        set((state) => ({ ...state, ...data })),
      removeUser: () => {
        set(initialState);
        authStore.persist.clearStorage();
      },
    }),
    {
      name: 'auth',
    },
  ),
);
