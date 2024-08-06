import { RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

// Constants
import { ROUTES } from "@/lib/constants";

// Pages
const MainLayout = lazy(() => import('@/ui/layouts/MainLayout'));
const AuthLayout = lazy(() => import('@/ui/layouts/auth'));


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
      path: ROUTES.SIGN_IN,
    },
    {
      path: ROUTES.SIGN_UP,
    },
  ],
}
