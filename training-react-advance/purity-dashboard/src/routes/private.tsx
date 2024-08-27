import { Outlet, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Spinner } from '@chakra-ui/react';

// Constants
import { ROUTES } from '@/constants';

// Pages
import { NotFound } from '@/pages';
const MainLayout = lazy(() => import('@/layouts/MainLayout'));
const AuthLayout = lazy(() => import('@/layouts/auth'));
const TablePage = lazy(() => import('@/pages/Tables'));
const ProfilePage = lazy(() => import('@/pages/profile'));

export const privateRoutes: RouteObject = {
  element: (
    <AuthLayout>
      <MainLayout>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </MainLayout>
    </AuthLayout>
  ),
  children: [
    {
      path: ROUTES.TABLES,
      element: <TablePage />,
    },
    {
      path: ROUTES.PROFILE,
      element: <ProfilePage />,
    },
    {
      path: ROUTES.DASHBOARD,
      element: <NotFound />
    },
    {
      path: ROUTES.BILLING,
      element: <NotFound />
    },
    {
      path: ROUTES.RTL,
      element: <NotFound />
    },
  ],
};
