import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Attendance from "../Pages/Attendance";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";


export const route = createBrowserRouter([
    { 
        path:'/',
        element: <Register />,
    },
    { 
        path:'/login',
        element: <Login />,
    },
    { 
        path:'/attendance',
        element: <Attendance />,
    },
])

