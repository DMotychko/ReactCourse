import React, {FC} from 'react';
import IPost from "../../models/IPost";

type TypeProps = {children?: React.ReactNode, post: IPost}
const Post: FC<TypeProps> = ({post}) => {
    return (
        <p>
            {post.title}
        </p>
    );
};

export default Post;