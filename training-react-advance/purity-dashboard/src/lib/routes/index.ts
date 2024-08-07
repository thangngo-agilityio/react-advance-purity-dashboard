import { createBrowserRouter } from 'react-router-dom';
import { publicRoutes } from './public';
import { privateRoutes } from './private';

export const routes = createBrowserRouter([publicRoutes, privateRoutes]);
