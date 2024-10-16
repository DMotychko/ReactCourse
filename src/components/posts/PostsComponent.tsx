import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.user.service";
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/api.posts.service";
import PostComponent from "../post/PostComponent";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        getPosts().then(value => setPosts(value))
    }, []);
    return (
        <div>
            {posts.map((post: IPost) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;