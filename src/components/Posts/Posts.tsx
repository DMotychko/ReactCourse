import React, {FC} from 'react';
import IPost from "../../models/IPost";
import Post from "../Post/Post";

type TypeProps = {children?: React.ReactNode, posts: IPost[]}
const Posts: FC<TypeProps> = ({posts}) => {
    return (
        <div>
            {posts.map((post: IPost, index: number) => <Post key={index} post={post}/>)}
        </div>
    );
};

export default Posts;