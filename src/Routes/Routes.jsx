import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },
            {
                path: '/projects',
                element: <Projects/>
            },

        ]
    }
])