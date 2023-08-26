import {
    createBrowserRouter,
  } from "react-router-dom";

import '../index.css'
import Main from "../Main/Main";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";


  export const router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage message="Oops! Something went wrong."></ErrorPage>
    
      },
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        }
      ]
    },
  ]);

