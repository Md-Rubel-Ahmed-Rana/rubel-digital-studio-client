import { createBrowserRouter } from 'react-router-dom';
import AddService from '../components/AddService/AddService';
import Blogs from '../components/Blogs/Blogs';
import ForceToLogin from '../components/ForceToLogin/ForceToLogin';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Reviews from '../components/Reviews/Reviews';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Services from '../components/Services/Services';
import UpdateReview from '../components/UpdateReview/UpdateReview';
import Main from '../Layout/Main';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/services",
                loader: () => fetch("http://localhost:5000/services"),
                element: <Services />
            },
            {
                path: "/services/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
                element: <ServiceDetails />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/reviews",
                element: <PrivateRoute> <Reviews /> </PrivateRoute>
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
                element: <PrivateRoute> <UpdateReview /> </PrivateRoute>
            },
            {
                path: "/addService",
                element: <PrivateRoute> <AddService /> </PrivateRoute>
            },
            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/forcToLogin",
                element: <ForceToLogin />
            },
        ]
    }
])


export default router;