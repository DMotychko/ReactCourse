import React, {useEffect} from 'react';
import {getData} from "../../services/api.service";
import {useStore} from "../../context/context";

const PostsPage = () => {
    const store = useStore();

    useEffect(() => {
        getData.getAllPosts().then(value => store.postsSlice.loadPosts(value))
    }, []);
    return (
        <div>
            {
                store.postsSlice.allPosts.map((post, index) => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default PostsPage;