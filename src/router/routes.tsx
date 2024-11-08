import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import HomePage from "../pages/home/HomePage";
import UsersPage from "../pages/users/UsersPage";
import PostsPage from "../pages/posts/PostsPage";
import CommentsPage from "../pages/comments/CommentsPage";
import CommentsPostsPage from "../pages/commentsPosts/CommentsPostsPage";

const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true, element: <HomePage/>
            },
            {
                path: 'users', element: <UsersPage/>
            },
            {
                path: 'posts', element: <PostsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path: 'commentsPosts', element: <CommentsPostsPage/>
            }
        ]
    }
]
export const router = createBrowserRouter(routes);