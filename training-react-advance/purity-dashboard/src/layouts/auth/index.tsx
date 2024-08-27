import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

// Constants
import { ROUTES } from '@/constants';

// Stores
import { authStore } from '@/stores';

interface IAuthLayout {
  children?: ReactElement;
}

const AuthLayout = ({ children }: IAuthLayout) => {
  const user = authStore((state) => state.user?.fields);

  return user?.email ? children : <Navigate to={ROUTES.SIGN_IN} />;
};

export default AuthLayout;
