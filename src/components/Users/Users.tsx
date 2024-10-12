import React, {FC, useEffect, useState} from 'react';
import {getUsers} from "../../services/api.service";
import IUser from "../../models/IUser";
import User from "../User/User";

const Users: FC<{lift: (id: number) => void}> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.users)
        })
    }, [])

    return (
        <div>
            <div>
                {users.map((user: IUser, index: number) => <User key={index} user={user} lift={lift}/>)}
            </div>
        </div>
    );
};

export default Users;