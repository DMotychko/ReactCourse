import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../../models/IUser";
import UserDetailsComponent from "../../components/user-details/UserDetailsComponent";
import {getPostsByUserId} from "../../services/api.posts.service";
import {IPost} from "../../models/IPost";
import PostComponent from "../../components/post/PostComponent";
import './UserDetailsPage.css'

const UserDetailsPage = () => {
    const [userPosts, setUserPosts] = useState<IPost[]>([])

    const {state} = useLocation()
    const userObj:IUser  = state

    const {id} = useParams()

    useEffect(() => {
        if(id) {
            getPostsByUserId(id).then(value => setUserPosts(value))
        }
    }, []);

    return (
        <div className={'user-details-page'}>
            <div>
                <h2>UserInfo</h2>
                <UserDetailsComponent userObj={userObj}/>
            </div>
            <div>
                <h2>User Posts</h2>
                {userPosts.map((userPost: IPost) => <PostComponent post={userPost} key={userPost.id}/>)}
            </div>
        </div>
    );
};

export default UserDetailsPage;