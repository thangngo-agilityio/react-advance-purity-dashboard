import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Constants
import { ROUTES } from '@/lib/constants';

// Pages
const MainLayout = lazy(() => import('@/ui/layouts/MainLayout'));
const AuthLayout = lazy(() => import('@/ui/layouts/auth'));
const TablePage = lazy(() => import('@/ui/pages/Tables'));

export const privateRoutes: RouteObject = {
  element: (
    <AuthLayout>
      <Suspense>
        <MainLayout />
      </Suspense>
    </AuthLayout>
  ),
  children: [
    {
      path: ROUTES.TABLES,
      element: <TablePage />,
    },
    // {
    //   path: ROUTES.PROFILE,
    // },
    // {
    //   path: ROUTES.BILLING,
    // },
  ],
};
