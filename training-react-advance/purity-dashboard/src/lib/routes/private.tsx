import { Outlet, RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Constants
import { ROUTES } from '@/lib/constants';
import { Spinner } from '@chakra-ui/react';
import { PageDefault } from '@/ui/components';

// Pages
const MainLayout = lazy(() => import('@/ui/layouts/MainLayout'));
const AuthLayout = lazy(() => import('@/ui/layouts/auth'));
const TablePage = lazy(() => import('@/ui/pages/Tables'));
const ProfilePage = lazy(() => import('@/ui/pages/profile'));

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
      element: <PageDefault page='Dashboard' />
    },
    {
      path: ROUTES.BILLING,
      element: <PageDefault page='Billing' />
    },
    {
      path: ROUTES.RTL,
      element: <PageDefault page='RTL' />
    },
  ],
};
