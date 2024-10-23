import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './index.css'

import App from './App.jsx'
import NotFound from "./pages/not-found/index.jsx";
import ReactPhoneInput from "./pages/react-phone-input";

export const ROUTERS = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <NotFound />
    },
    {
        path: '/react-phone-input',
        element: <ReactPhoneInput/>
    }
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={ROUTERS}/>
    </StrictMode>,
)
