import NotFoundPage from '@/views/error/NotFoundPage';
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('@/layouts/Default'));
const Login = React.lazy(() => import('@/views/Login'));
const Main = React.lazy(() => import('@/views/Main.tsx'));

// Guide

const Used = React.lazy(() => import('@/views/guide/Used.tsx'));
const Debug = React.lazy(() => import('@/views/guide/Debug.tsx'));

// Dev
const Team = React.lazy(() => import('@/views/dev/Team'));
const Store = React.lazy(() => import('@/views/dev/Store'));

const routes = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <DefaultLayout />,
    children: [
      {
        path: 'main',
        element: <Main />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: 'guide',
    element: <DefaultLayout />,
    children: [
      {
        path: 'used',
        element: <Used />,
        errorElement: <NotFoundPage />,
      },
      {
        path: 'debug',
        element: <Debug />,
        errorElement: <NotFoundPage />,
      },
    ],
  },
  {
    path: '/dev',
    element: <DefaultLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'store',
        element: <Store />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />,
  },
]);

export default routes;
