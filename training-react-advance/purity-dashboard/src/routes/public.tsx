import { Outlet, RouteObject } from "react-router-dom";
import { lazy, Suspense } from "react";

// Constant
import { ROUTES } from "@/constants";


// Pages
const SignInPage = lazy(() => import('@/pages/Sign-in'));

export const publicRoutes: RouteObject = {
  element: (
    <SignInPage>
      <Suspense>
        <Outlet />
      </Suspense>
    </SignInPage>
  ),
  children: [
    {
      path: ROUTES.SIGN_IN,
      Component: Outlet,
      children: [
        {
          path: ROUTES.SIGN_IN,
          Component: SignInPage
        }
      ]
    },
  ],
}
