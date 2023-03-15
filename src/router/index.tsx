
import React, { lazy } from "react";
// import Home from "../view/Home";
// import About from "../view/About";
import { Navigate } from 'react-router-dom'
const Home = lazy(() => import('../view/Home'))
const About = lazy(() => import('../view/About'))
const routes = [
    {
        path: "/",
        element: <Navigate to='/home' />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    }
]
export default routes