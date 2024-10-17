import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

const PostDetailsComponent: FC<{postObj: IPost}> = ({postObj}) => {
    return (
        <div>
            <h2>{postObj.id}</h2>
            <h4>{postObj.title}</h4>
            <p>{postObj.body}</p>
            <p>{postObj.userId}</p>
        </div>
    );
};

export default PostDetailsComponent;