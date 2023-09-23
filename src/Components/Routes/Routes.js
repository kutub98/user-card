import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../AllUser/UserProfile";
import UsersList from "../AllUser/UsersList";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Home/Home";

const Routes = createBrowserRouter([

    {
        path:"/",
        element: <MainLayout/>,
       
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/home",
                element: <Home/>,
            },
            {
                path: "/user",
                element: <UsersList/>
            },
            {
                path: "/user/:id", // Fix the path here
                element: <UserProfile/>
            }
        ]
    },
    
    
]);
export default Routes