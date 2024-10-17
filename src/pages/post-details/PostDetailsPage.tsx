import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IPost} from "../../models/IPost";
import PostDetailsComponent from "../../components/post-details/PostDetailsComponent";
import {IComment} from "../../models/IComment";
import {getCommentsByPostsId} from "../../services/api.comments.service";
import CommentComponent from "../../components/comment/CommentComponent";

const PostDetailsPage = () => {
    const [postComments, setPostComments] = useState<IComment[]>([])

    const {state} = useLocation()
    const postObj: IPost = state

    const {id} = useParams()

    useEffect(() => {
        if(id) {
            getCommentsByPostsId(id).then(value => setPostComments(value))
        }
    }, []);

    return (
        <div>
            <div>
                <h2>Post details</h2>
                <PostDetailsComponent postObj={postObj} />
            </div>
            <div>
                <h2>Post comments</h2>
                {postComments.map((postComment: IComment) => <CommentComponent comment={postComment} />)}
            </div>
        </div>
    );
};

export default PostDetailsPage;