import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
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
        ]
    }
])


export default router;