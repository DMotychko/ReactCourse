import React, {FC} from 'react';
import {IComment} from "../../models/IComment";

const CommentComponent: FC<{comment: IComment}> = ({comment}) => {
    return (
        <div>
            <p>{comment.id} - {comment.name}</p>
        </div>
    );
};

export default CommentComponent;