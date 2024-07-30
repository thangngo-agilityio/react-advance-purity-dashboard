import { Outlet, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

// Constant
import { ROUTES } from "@/lib/constants";


// Pages
const SignInPage = lazy(() => import('@/ui/pages/SignIn'));
const SignUpPage = lazy(() => import('@/ui/pages/SignUp'));

export const publicRoutes: RouteObject = {
  element: (
    <Suspense>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: ROUTES.SIGN_IN,
      Component: SignInPage,
    },
    {
      path: ROUTES.SIGN_UP,
      Component: SignUpPage,
    },
  ],
}
