import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import CroquetasPage from './pages/CroquetasPage';
import ErrorPage from './pages/ErrorPage';
import NuevaCroqueta from './pages/NuevaCroqueta';


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
  { path: '/', element: <Home /> },
  { path: '/croquetas', element: <CroquetasPage /> },
  { path: '/nueva', element: <NuevaCroqueta /> },
],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
