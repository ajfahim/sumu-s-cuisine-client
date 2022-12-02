import { createBrowserRouter } from "react-router-dom";
import AddCake from "../../components/pages/AddCake/AddCake";
import AllCakes from "../../components/pages/AllCakes/AllCakes";
import Blog from "../../components/pages/Blog/Blog";
import CakeDetails from "../../components/pages/CakeDetails/CakeDetails";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/Login/Login";
import MyReviews from "../../components/pages/MyReviews/MyReviews";
import Registration from "../../components/pages/Registration/Registration";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: "/add-cake",
                element: <PrivateRoute><AddCake></AddCake></PrivateRoute>
            },
            {
                path: "/my-reviews",

                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/all-cakes",
                element: <AllCakes></AllCakes>
            },
            {
                path: "/cake/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/cake/${params.id}`),
                element: <CakeDetails></CakeDetails>
            }
        ]
    }
])