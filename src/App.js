import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestrauntMenu from './components/RestrauntMenu';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

const Layout = () => {
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

const AppRouter = createBrowserRouter([
    {
        path: '/',
        element : <Layout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element : <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/menu/:resid',
                element: <RestrauntMenu />
            }
        ],
        errorElement: <Error />,
    },
    
])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={AppRouter}/>);