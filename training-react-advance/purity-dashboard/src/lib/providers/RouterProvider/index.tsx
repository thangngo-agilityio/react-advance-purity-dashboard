import { RouterProvider as Provider } from 'react-router-dom';

// Routes
import { routes } from '@/lib/routes';

const RouterProvider = () => <Provider router={routes} />;

export default RouterProvider;
