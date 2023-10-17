import {
    createBrowserRouter,
    
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home";

const Router =createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
     },
     
     
     
     
    ]
  },
 


]);

export default Router;