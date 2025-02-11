import { useCallback, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

// Constants
import { API_PATH, ROUTES, USER_LOGIN } from '@/constants';

// Service
import { mainHttpService } from '@/service';

// Types
import { TRecordUser, TUser } from '@/types';

export type TUserResponse = {
  records: TUser[];
};

export type TUserRecordResponse = {
  records: TRecordUser[];
};

export const useAuthLogin = () => {
  const { isPending, data: users } = useQuery({
    queryKey: [USER_LOGIN],
    queryFn: async () =>
      (await mainHttpService.get<TUserRecordResponse>(API_PATH.USER)).data,
    refetchOnWindowFocus: false,
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

export const useUpdateUser = () => {
  const { mutateAsync: updateUser } = useMutation({
    mutationFn: async (payload: TUserRecordResponse) =>
      (await mainHttpService.put<TUserRecordResponse>(API_PATH.USER, payload))
        .data,
  });

  return {
    updateUser,
  };
};
