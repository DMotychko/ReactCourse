import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/main/MainLayout";
import QuotesPage from "../pages/quotes/QuotesPage";
import HomePage from "../pages/home/HomePage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
              index: true,
              element: <HomePage />
            },
            {
                path: 'quotes',
                element: <QuotesPage />
            }
        ]
    }
])