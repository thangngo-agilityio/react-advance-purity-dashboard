import { useCallback, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// Constants
import { API_PATH, ROUTES, USER_LOGIN } from '../constants';

// Service
import { mainHttpService } from '../service';

// Types
import { TUser } from '../types';
import { useNavigate } from 'react-router-dom';

export type TUserResponse = {
  records: TUser[];
};

export const useAuthLogin = () => {
  const { isPending, data: users } = useQuery({
    queryKey: [USER_LOGIN],
    queryFn: () =>
      mainHttpService.get<TUserResponse>(API_PATH.USER).then((res) => {
        return res.data.records;
      }),
  });

  return { users, isPending };
};

export const useAuthRegister = () => {
  const { mutateAsync: createAccount } = useMutation({
    mutationFn: async (user: TUserResponse) =>
      await mainHttpService
        .post<TUserResponse>(API_PATH.USER, user)
        .then((res) => {
          return res;
        }),
  });

  return {
    createAccount,
  };
};

export const useAuthLogout = () => {
  const [isLogout, setIsLogout] = useState(false);

  const navigate = useNavigate();
  const handleLogout = useCallback(async () => {
    setIsLogout(true);

    setTimeout(() => {
      setIsLogout(false);
      navigate(ROUTES.SIGN_IN);
    }, 1000);
  }, []);

  return {
    isLogoutHandling: isLogout,
    signOut: handleLogout,
  };
};
