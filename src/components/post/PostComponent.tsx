import React, {FC} from 'react';
import {IPost} from "../../models/IPost";
import {NavLink} from "react-router-dom";

const PostComponent: FC<{post: IPost}> = ({post}) => {
    return (
        <div>
            <NavLink to={post.id.toString()} state={post}><p>{post.id} - {post.title}</p></NavLink>
        </div>
    );
};

export default PostComponent;