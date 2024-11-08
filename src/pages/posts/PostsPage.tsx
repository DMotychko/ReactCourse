import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsSliceActions} from "../../redux/slices/postsSLice";

const PostsPage = () => {
    const postsSliceState = useAppSelector(store => store.postsSLice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(postsSliceActions.loadPosts())
    }, []);
    return (
        <div>
            {
                postsSliceState.posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default PostsPage;