import React, {useEffect} from 'react';
import {useStore} from "../../context/context";
import {getData} from "../../services/api.service";

const UsersPage = () => {
    const store = useStore();

    useEffect(() => {
        getData.getAllUsers().then(value => store.userSlice.loadUsers(value))
    }, []);
    return (
        <div>
            {
                store.userSlice.allUsers.map((user, index) => <div key={user.id}>{user.username}</div>)
            }
        </div>
    );
};

export default UsersPage;