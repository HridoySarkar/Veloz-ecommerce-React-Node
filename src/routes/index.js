import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../app/pages/home/Index'; 
import Error from '../layouts/404/errorPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error/>
    },
]);

export default router;
