import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

// Constants
import { ROUTES } from '@/lib/constants';

// Stores
import { authStore } from '@/lib/stores';

interface IAuthLayout {
  children?: ReactElement;
}

const AuthLayout = ({ children }: IAuthLayout) => {
  const user = authStore((state) => state.user?.fields);
  console.log(user);

  return user?.email ? children : <Navigate to={ROUTES.SIGN_IN} />;
};

export default AuthLayout;
