import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import SingleContactPage from "./pages/contact/SingleContactPage";
import AboutPage from "./pages/about/AboutPage";
import ContactsPage from "./pages/contacts/ContactsPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const BrowserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contacts',
                element: <ContactsPage />
            },
            {
                path: 'contacts/:id',
                element: <SingleContactPage />
            },
            {
                element: <AboutPage />, index: true
            }
        ]
    }
])
root.render(
    <RouterProvider router={BrowserRouter} />
);


