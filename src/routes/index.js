import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../app/pages/home/Index'; 
import Error from '../layouts/404/errorPage';
import Cart from '../app/pages/cart/Index';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
        children: [
            {
                path: "cart", // Accessed via /cart
                element: <Cart />,
            }
        ]
    },
]);

export default router;
