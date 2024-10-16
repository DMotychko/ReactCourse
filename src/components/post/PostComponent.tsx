import React, {FC} from 'react';
import {IPost} from "../../models/IPost";

const PostComponent: FC<{post: IPost}> = ({post}) => {
    return (
        <div>
            <p>{post.id} - {post.title}</p>
        </div>
    );
};

export default PostComponent;