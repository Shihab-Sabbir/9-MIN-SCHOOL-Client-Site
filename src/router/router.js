import { createBrowserRouter } from "react-router-dom";
import Booking from "../component/Booking/Booking";
import Destinations from "../component/Destinations/Destinations";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Hotel from "../component/Hotel/Hotel";
import Layout from "../component/Layout/Layout";
import Login from "../component/Login/Login";
import Profile from "../component/Profile/Profile";
import Register from "../component/Register/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage />, element: <Layout />, children: [
            {
                path: '/', loader: async ({ params }) => {
                    return fetch('http://localhost:5000/hotels/slider');
                }, element: <Home />
            },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/courses', element: <Destinations /> },
            { path: '/booking', element: <ProtectedRoute><Booking /></ProtectedRoute> },
            { path: '/profile', element: <Profile /> },
            {
                path: '/hotels/:id', loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`);
                }, element: <Hotel />
            },
        ]
    }
])
