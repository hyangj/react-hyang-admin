import { isLogin } from '@/utils/auth';
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

// User
const Profile = React.lazy(() => import('@/views/user/Profile'));

const routes = createBrowserRouter([
  {
    path: '*',
    element: <Navigate to={isLogin ? '/' : '/login'} />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/',
    element: isLogin ? <DefaultLayout /> : <Navigate to="/login" replace />,
    // element: <DefaultLayout />,
    errorElement: <DefaultLayout />,
    children: [
      { path: '', element: <Navigate to="/main" /> },
      {
        path: 'main',
        element: <Main />,
        errorElement: <NotFoundPage />,
      },
      {
        path: 'guide',
        errorElement: <NotFoundPage />,
        children: [
          { path: '', element: <Navigate to="used" /> },
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
        path: 'dev',
        errorElement: <NotFoundPage />,
        children: [
          { path: '', element: <Navigate to="leader" /> },
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
        path: 'user',
        errorElement: <NotFoundPage />,
        children: [
          { path: '', element: <Navigate to="profile" /> },
          {
            path: 'profile',
            element: <Profile />,
            errorElement: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

export default routes;
