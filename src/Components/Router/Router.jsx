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
import Cards from "../Cards/Cards";
import BrandProduct from "../BrandProduct/BrandProduct";
import DetailsSection from "../DetailsSection/DetailsSection";
import UpdateProduct from "../UpdateProduct/UpdateProduct";



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
      element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
      loader:() => fetch('https://brand-server-jupp2a5jy-abu-rayhan-s-projects.vercel.app/cart')
     },
     {
      path:"/login",
      element:<Login></Login>,
     },
     {
      path:"/register",
      element:<Register></Register>,
     },
     {
      path:"/cards",
      element:<Cards></Cards>,
   
     },
    {
      path:"/brandProduct/:id",
      element:<BrandProduct></BrandProduct>,
       loader:() => fetch('/data.json')
       
    },
    {
      path:"/details/:_id",
      element:<PrivateRoute><DetailsSection></DetailsSection></PrivateRoute>,
      loader:({params}) => fetch(`https://brand-server-jupp2a5jy-abu-rayhan-s-projects.vercel.app/brands/${params._id}`)
    },
    {
      path:"/update/:id",
      element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
      loader:({params}) => fetch(`https://brand-server-jupp2a5jy-abu-rayhan-s-projects.vercel.app/brands/${params.id}`)
    },
   
    ]
  },
 


]);

export default Router;