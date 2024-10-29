import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import ProductsPage from "../pages/products/ProductsPage";
import MainLayout from "../layouts/MainLayout";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true, element: <HomePage />
            },
            {
                path: 'auth/login', element: <LoginPage />
            },
            {
                path: 'auth/products', element: <ProductsPage />
            }
        ]
    }
])