import { useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

// Constants
import { API_PATH, ROUTES, USER_LOGIN } from '../constants';

// Service
import { mainHttpService } from '../service';

// Types
import { AuthFormData, TUser } from '../types';
import { authStore } from '../stores';
import { useNavigate } from 'react-router-dom';

export type TUserResponse = {
  records: TUser[];
};

export const useAuthLogin = () => {
  const navigate = useNavigate();
  const setUser = authStore((state) => state.setUser);

  const { isPending, data: users } = useQuery({
    queryKey: [USER_LOGIN],
    queryFn: () =>
      mainHttpService.get<TUserResponse>(API_PATH.USER).then((res) => {
        return res.data.records;
      }),
  });

  const handleUserSignIn = useCallback(
    (data: AuthFormData): void => {
      try {
        const res = users?.find(
          (user) =>
            user.fields.email === data.email &&
            user.fields.password === data.password,
        );
        if (res) {
          setUser({ user: res });
          navigate(ROUTES.TABLES);
        }
      } catch (err) {
        throw err;
      }
    },
    [users, navigate, setUser],
  );

  return { users, isPending, handleUserSignIn };
};
