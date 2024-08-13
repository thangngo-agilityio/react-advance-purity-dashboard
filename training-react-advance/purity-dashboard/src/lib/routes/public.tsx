import { Outlet, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

// Constants
import { ROUTES } from '@/lib/constants';

// Pages
const SignInPage = lazy(() => import('@/ui/pages/SignIn'));
const SignUpPage = lazy(() => import('@/ui/pages/SignUp'));

export const publicRoutes: RouteObject = {
  element: (
    <Suspense fallback={<Spinner />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: ROUTES.ROOT,
      Component: Outlet,
      children: [
        {
          index: true,
          element: <SignInPage />,
        },
        {
          path: ROUTES.SIGN_IN,
          element: <SignInPage />,
        },
      ],
    },
    {
      path: ROUTES.SIGN_IN,
      element: <SignInPage />,
    },
    {
      path: ROUTES.SIGN_UP,
      element: <SignUpPage />,
    },
  ],
};
