import { createBrowserRouter } from "react-router-dom";
import AddRacipe from "../../components/pages/AddRacipe/AddRacipe";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/Login/Login";
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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: "/add-racipe",
                element: <PrivateRoute><AddRacipe></AddRacipe></PrivateRoute>
            }
        ]
    }
])