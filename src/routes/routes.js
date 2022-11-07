import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Services from '../components/Services/Services';
import Main from '../Layout/Main';


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
        ]
    }
])


export default router;