import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Loyout from "./Loyout.jsx";

import ShopPage from "./pages/ShopPage.jsx";
import FavoritPage from "./pages/FavoritPage.jsx";
import CartPage from "./pages/CartPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Loyout/>,
        children: [
            
            {
                index: true,
                element: <ShopPage/> 
            },    
            {
                path:'/shop',
                element: <ShopPage/>
            },
            {
                path:'/about',
                element: <>
                            <h1 style={{ marginTop: '80px' }}>About</h1>
                            <h2>The page is under construction...</h2>
                        </> 
            },
            {
                path:'/services',
                element: <>
                            <h1 style={{ marginTop: '80px' }}>Services</h1>
                            <h2>The page is under construction...</h2>
                        </> 
            },
            {
                path:'/contacts',
                element: <>
                            <h1 style={{ marginTop: '80px' }}>Contacts</h1>
                            <h2>The page is under construction...</h2>
                         </> 
            },
            {
                path:'/favorites',
                element: <FavoritPage/>
            },
            {
                path:'/cart',
                element: <CartPage/>
            }
        ]
    }
    
]);