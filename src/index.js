import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle';

import { HomePage } from './pages/home';
import { AuthPage } from './pages/auth';
import { BoxDetailPage } from './pages/box_detail';
import { ErrorPage } from './pages/error';

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/:id", element: <BoxDetailPage /> },
  { path: "*", element: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
