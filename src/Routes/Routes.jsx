import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';
import FavoriteList from '../pages/FavoriteList/FavoriteList';
import AllApps from '../pages/AllApps/AllApps';
import Installation from '../pages/Installation/Installation';
import AppNotFound from '../pages/AppNotFound/AppNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('/AppData.json'),
      },
      {
        path: '/home',
        Component: Home,
        loader: () => fetch('/AppData.json'),
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/favorites',
        loader: () => fetch('/AppData.json'),
        Component: FavoriteList,
      },
      {
        path: '/apps',
        loader: () => fetch('/AppData.json'),
        Component: AllApps,
      },
      {
        path: '/all-apps',
        loader: () => fetch('/AppData.json'),
        Component: AllApps,
      },
      {
        path: '/installation',
        Component: Installation,
      },
      {
        path: '/appDetails/:id',
        loader: () => fetch('/AppData.json'),
        Component: AppDetails,
        errorElement: <AppNotFound />,
      },

      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
