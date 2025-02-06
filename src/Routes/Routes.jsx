import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Project1 from "../Pages/Projects/Project1";
import Project2 from "../Pages/Projects/Project2";
import Project3 from "../Pages/Projects/Project3";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/projects1',
                element: <Project1 />
            },
            {
                path: '/projects2',
                element: <Project2 />
            },
            {
                path: '/projects3',
                element: <Project3 />
            },
        ]
    }
])