import React, {useMemo} from 'react';
import {useAppSelector} from "../../redux/store";
import {IPostComments} from "../../models/IPostComments";

const CommentsPostsPage = () => {
    const {postsSLice, commentsSlice} = useAppSelector(store => store);

    const getPostCommentsArray: IPostComments[] = useMemo((): IPostComments[] => {
        const newArray = postsSLice.posts.map(post => {
            const filteredComments = commentsSlice.comments.filter(comment => comment.postId === post.id)
            return {post: post, comments: filteredComments}
        })
        return newArray
    }, [postsSLice, commentsSlice])
    return (
        <div>
            {getPostCommentsArray.map((item, index) => <div key={index}>
                <h2>{item.post.title}</h2>
                {item.comments.map(comment => <div key={comment.id}>{comment.name}</div>)}
            </div>)}
        </div>
    );
};

export default CommentsPostsPage;