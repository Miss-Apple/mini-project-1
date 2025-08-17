import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage.tsx";
import CustomerSearch from "./components/CustomerSearch.tsx";

const router = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            children: [
                {
                    index: true,
                    element: <HomePage/>
                },
                {
                    path: '/customer',
                    element: <CustomerSearch/>
                },
            ]
        },
    ],
    {
        basename: '/',
    })

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)


