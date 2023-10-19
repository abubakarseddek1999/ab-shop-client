import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../component/home/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import CardDetails from "../component/CardDetails";
import PrivetRoute from "../component/PrivetRoute";
import NotFound from "../component/NotFound";
import AddProduct from "../component/AddProduct";
import MyCart from "../component/MyCart";
import UpdateProduct from "../component/UpdateProduct";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <NotFound></NotFound>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: async () => (fetch("/data.json"))
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/myCart',
          element:<PrivetRoute><MyCart></MyCart></PrivetRoute>,
          loader: () => fetch('http://localhost:5000/product')
        },
        {
          path:'/about',
          element: <PrivetRoute><AddProduct></AddProduct></PrivetRoute>
        },
        {
          path:'/updateProduct/:id',
          element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)

        },
        {
          path:'/cardDetail/:id',
          element:<PrivetRoute> <CardDetails></CardDetails></PrivetRoute>,
          loader: async () => (fetch("/data.json"))
          // loader: async ({ params }) => (fetch(`${"data.json"}/${params.id}`))

        }
      ]
    },
  ]);

  export default router;