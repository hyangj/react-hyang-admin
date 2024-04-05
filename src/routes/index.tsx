import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';

const NotFoundPage = React.lazy(() => import('@/views/error/NotFoundPage.tsx'));
const DefaultLayout = React.lazy(() => import('@/layouts/Default'));
const Login = React.lazy(() => import('@/views/login'));
const Main = React.lazy(() => import('@/views/Main.tsx'));

// Guide

const Used = React.lazy(() => import('@/views/guide/Used.tsx'));
const Debug = React.lazy(() => import('@/views/guide/Debug.tsx'));

// Dev
const Leader = React.lazy(() => import('@/views/dev/leader'));
const Store = React.lazy(() => import('@/views/dev/Store'));
const Api = React.lazy(() => import('@/views/dev/Api'));

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
      { path: '', element: <Navigate to="/main" /> },
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
    errorElement: <NotFoundPage />,
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
        path: 'leader',
        element: <Leader />,
      },
      {
        path: 'store',
        element: <Store />,
      },
      {
        path: 'api',
        element: <Api />,
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
