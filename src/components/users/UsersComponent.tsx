import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import UserComponent from "../user/UserComponent";
import {getUsers} from "../../services/api.user.service";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, []);
    return (
        <>
            {users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)}
        </>
    );
};

export default UsersComponent;