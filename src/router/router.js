import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../component/AboutUs/AboutUs";
import Blog from "../component/Blog/Blog";
import Booking from "../component/Booking/Booking";
import Destinations from "../component/Destinations/Destinations";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Hotel from "../component/Hotel/Hotel";
import Layout from "../component/Layout/Layout";
import Login from "../component/Login/Login";
import Popular from "../component/Popular/Popular";
import Profile from "../component/Profile/Profile";
import Register from "../component/Register/Register";
import Search from "../component/Search/Search";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage />, element: <Layout />, children: [
            {
                path: '/', loader: async ({ params }) => {
                    return fetch('https://9-min-school.vercel.app/hotels/slider');
                }, element: <Home />
            },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/courses', element: <Destinations /> },
            { path: '/payment', element: <ProtectedRoute><Booking /></ProtectedRoute> },
            { path: '/profile', element: <Profile /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: <AboutUs /> },
            { path: '/popular', element: <Popular /> },
            {
                path: '/courses/:id', loader: async ({ params }) => {
                    return fetch(`https://9-min-school.vercel.app/course/${params.id}`);
                }, element: <Hotel />
            },
            {
                path: '/search/:name', loader: async ({ params }) => {
                    return fetch(`https://9-min-school.vercel.app/search/${params.name}`);
                }, element: <Search />
            },
        ]
    }
])
