import React, {useMemo} from 'react';
import {useStore} from "../../context/context";

const PostsWithCommentsPage = () => {
    const {postsSlice: {allPosts}, commentsSlice: {allComments}} = useStore();

    const postsWithCommentsArray = useMemo(() => {
        return allPosts.map(post => {
            return {
                ...post,
                comments: allComments.filter(comment => comment.postId === post.id )
            }
        })
    }, [allPosts, allComments])

    return (
        <div>
            {
                postsWithCommentsArray.map(postWithComments => <div key={postWithComments.id}>
                    <h3>{postWithComments.title}</h3>
                    <ul>
                        {postWithComments.comments.map(comment => <li key={comment.id}>{comment.name}</li>)}
                    </ul>
                </div>)
            }
        </div>
    );
};

export default PostsWithCommentsPage;