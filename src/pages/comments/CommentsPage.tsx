import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postsSliceActions} from "../../redux/slices/postsSLice";
import {commentsSliceActions} from "../../redux/slices/commentsSlice";

const CommentsPage = () => {
    const commentsSliceState = useAppSelector(store => store.commentsSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(commentsSliceActions.loadComments())
    }, []);
    return (
        <div>
            {
                commentsSliceState.comments.map(comment => <div key={comment.id}>{comment.name}</div>)
            }
        </div>
    );
};

export default CommentsPage;