import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import UserDetailsPage from "../pages/user-details/UserDetailsPage";
import PostDetailsPage from "../pages/post-details/PostDetailsPage";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'users',
                element: <UsersPage />
            },
            {
                path: 'users/:id',
                element: <UserDetailsPage />
            },
            {
                path: 'posts',
                element: <PostsPage />
            },
            {
                path: 'posts/:id',
                element: <PostDetailsPage />
            },
            {
                path: 'comments',
                element: <CommentsPage />
            }
        ]
    }
]);