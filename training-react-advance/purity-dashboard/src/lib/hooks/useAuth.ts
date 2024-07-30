import { useMutation } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';

// Stores
import { useAuthStore } from '../stores';

// Models
import { AuthLoginRequest, LoginResponse } from '../models';
import { API_PATH } from '../constants';

// Service
import { mainHttpService } from '../service';

export const useAuthLogin = () => {
  const [setAuthenticated, setAccessToken, setUserId] = useAuthStore(
    (state) => [state.setAuthenticated, state.setAccessToken, state.setUserId],
    shallow,
  );

  const { isPending, ...rest } = useMutation<
    LoginResponse,
    string,
    AuthLoginRequest
  >({
    mutationFn: (payload) => mainHttpService.post(API_PATH.USER, payload),
    onSuccess: (res) => {
      const { user, accessToken } = res;
      const { id = '' } = user || {};

      setUserId(id.toString());
      setAccessToken(accessToken);
      setAuthenticated(true);
    },
  });


  return { ...rest, isPending };
};
