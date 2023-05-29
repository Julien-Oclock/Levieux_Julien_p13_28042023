import { createBrowserRouter } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import SignIn from './Pages/SignIn';
import User from './Pages/User';

const Router = createBrowserRouter([
    { 
        path: '/', 
        element: <HomePage />,
        errorElement: <div>Not Found</div>,
    },
    { path: '/user', element: <User /> },
    { path: '/signin', element: <SignIn /> }, 
])


export default Router;