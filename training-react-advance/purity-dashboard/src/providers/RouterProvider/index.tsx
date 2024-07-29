import { memo } from 'react';
import { RouterProvider as Provider } from 'react-router-dom';

// Routes
import { routes } from '@/routes';

const RouterProvider = () => <Provider router={routes} />;

export default memo(RouterProvider);
