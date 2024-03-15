import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import Home from '../pages/Home'
import Contact from '../pages/ContactPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      children: [
        { path: '/', element: <Navigate to="/home" replace />, index: true },
        { path: '/home', element: <Home />  },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
};

export default Router;
