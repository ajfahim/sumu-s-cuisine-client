import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/pages/Home/Home";
import Login from "../../components/pages/Login/Login";
import Registration from "../../components/pages/Registration/Registration";
import Main from "../../layout/Main";

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
            }
        ]
    }
])