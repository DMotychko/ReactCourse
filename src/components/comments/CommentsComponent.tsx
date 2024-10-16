import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComment";
import {getComments} from "../../services/api.comments.service";
import CommentComponent from "../comment/CommentComponent";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        getComments().then(value => {
            setComments(value)
            console.log(value)
        })
    }, []);

    return (
        <div>
            {comments.map((comment: IComment) => <CommentComponent key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsComponent;