import { Outlet, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

// Constants
import { ROUTES } from "@/lib/constants";

// Stores
// import { useAuthStore } from "../stores";

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
      element: <SignInPage />,
    },
    {
      path: ROUTES.SIGN_UP,
      element: <SignUpPage />,
    },
  ],
}
