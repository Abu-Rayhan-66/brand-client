import {
    createBrowserRouter,
    
  } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import MyCart from "../MyCart/MyCart";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
     {
      path:"/product",
      element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
     },
     {
      path:"/cart",
      element:<MyCart></MyCart>
     },
     {
      path:"/login",
      element:<Login></Login>,
     },
     {
      path:"/register",
      element:<Register></Register>,
     },
     

     
    ]
  },
 


]);

export default Router;