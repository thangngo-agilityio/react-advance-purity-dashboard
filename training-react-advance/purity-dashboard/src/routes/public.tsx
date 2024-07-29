import { Outlet, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

// Constant
import { ROUTES } from "@/constants";


// Pages
const SignInPage = lazy(() => import('@/pages/SignIn'));
const SignUpPage = lazy(() => import('@/pages/SignUp'));

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
