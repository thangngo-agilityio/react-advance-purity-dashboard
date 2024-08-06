// Libs
import { createWithEqualityFn } from 'zustand/traditional';
import {
  createJSONStorage,
  persist,
  StateStorage,
  StorageValue,
} from 'zustand/middleware';

// Types
import { IUser } from '../types';

type TAuthState = {
  user: IUser | null;
};

export type TAuthAction = {
  setUser: (data: IUser) => void;
  removeUser: () => void;
};

const initialState: TAuthState = {
  user: null,
};

const getItem: StateStorage['getItem'] = (key: string) => {
  const response: string = localStorage.getItem(key) as string;
  const defaultValue: string = JSON.stringify(initialState);

  if (response) return response;

  return defaultValue;
};

const setItem: StateStorage['setItem'] = (key: string, value: string) => {
  const {
    state: { user },
  }: StorageValue<TAuthState & TAuthAction> = JSON.parse(value);
  const hasUser: boolean = !!user && !!Object.keys(user).length;

  if (hasUser) {
    return localStorage.setItem(key, value);
  }

  return localStorage.removeItem(key);
};

const removeItem: StateStorage['removeItem'] = (key: string) => {
  return localStorage.removeItem(key);
};

const myStore: () => StateStorage = (): StateStorage => ({
  getItem,
  setItem,
  removeItem,
});

export const authStore = createWithEqualityFn(
  persist<TAuthState & TAuthAction>(
    (set) => ({
      ...initialState,
      setUser: (data: IUser) => set({ user: data }),
      removeUser: () => {
        set(initialState);
        authStore.persist.clearStorage();
      },
    }),
    {
      name: 'auth',
      storage: createJSONStorage(myStore),
    },
  ),
);
