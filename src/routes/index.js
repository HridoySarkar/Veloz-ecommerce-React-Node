import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App'; // Main layout
import Home from '../app/pages/home/Index'; 
import Error from '../layouts/404/errorPage';
import Cart from '../app/pages/cart/Index';
import Checkout from "../app/pages/checkout/Index";

// Router configuration
const router = createBrowserRouter([
    {
        path: "/", 
        element: <App />,  // Main layout with Navbar and Footer
        errorElement: <Error />,  // Error page for invalid routes
        children: [
            {
                path: "/",  // Home page
                element: <Home />
            },
            {
                path: "cart",  // Cart page
                element: <Cart />
            },
            {
                path: "checkout",  // Checkout page
                element: <Checkout />
            }
        ]
    }
]);

export default router;
