import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../component/AboutUs/AboutUs";
import Blog from "../component/Blog/Blog";
import Booking from "../component/Payment/Payment";
import Destinations from "../component/Courses/Courses";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import Home from "../component/Home/Home";
import Layout from "../component/Layout/Layout";
import Login from "../component/Login/Login";
import Popular from "../component/Popular/Popular";
import Profile from "../component/Profile/Profile";
import Register from "../component/Register/Register";
import Search from "../component/Search/Search";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CourseDetails from "../component/CourseDetails/CourseDetails";

export const router = createBrowserRouter([
    {
        path: '/', errorElement: <ErrorPage />, element: <Layout />, children: [
            { path: '/', element: <Home /> },
            { path: '/register', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/courses', element: <Destinations /> },
            { path: '/payment', element: <ProtectedRoute><Booking /></ProtectedRoute> },
            { path: '/profile', element: <Profile /> },
            { path: '/blog', element: <Blog /> },
            { path: '/about', element: <AboutUs /> },
            { path: '/popular', element: <Popular /> },
            {
                path: '/course/:id', loader: async ({ params }) => {
                    return fetch(`https://9-min-school.vercel.app/course/${params.id}`);
                }, element: <CourseDetails />
            },
            {
                path: '/search/:name', loader: async ({ params }) => {
                    return fetch(`https://9-min-school.vercel.app/search/${params.name}`);
                }, element: <Search />
            },
        ]
    }
])
