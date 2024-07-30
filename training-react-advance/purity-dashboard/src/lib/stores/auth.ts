// Libs
import { createWithEqualityFn } from 'zustand/traditional';
import { persist } from 'zustand/middleware';

// Constants
import { ACCESS_TOKEN } from '@/lib/constants';

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string;
  userId: string;
}

interface AuthStore extends AuthState {
  setAuthenticated: (isAuthenticated: boolean) => void;
  setAccessToken: (accessToken: string) => void;
  setUserId: (id: string) => void;
  clearAuth: () => void;
}

const INITIAL_AUTH_STATE = {
  isAuthenticated: !!localStorage.getItem(ACCESS_TOKEN) || false,
  accessToken: '',
  userId: '',
};

export const useAuthStore = createWithEqualityFn<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      ...INITIAL_AUTH_STATE,

      setAuthenticated: (isAuthenticated) => {
        set({ isAuthenticated });
      },

      setAccessToken: (accessToken) => {
        set({ accessToken });
      },

      setUserId: (id) => {
        set({ userId: id });
      },

      clearAuth: () => {
        set({ ...INITIAL_AUTH_STATE });
      },
    }),
    { name: 'auth' },
  ),
);
