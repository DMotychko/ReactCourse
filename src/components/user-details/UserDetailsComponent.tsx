import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

const UserDetailsComponent: FC<{userObj: IUser}> = ({userObj}) => {
    return (
        <div>
            <p>name - {userObj.name}</p>
            <p>website - {userObj.website}</p>
            <p>id - {userObj.id}</p>
            <p>email - {userObj.email}</p>
            <p>phone - {userObj.phone}</p>
            <p>username - {userObj.username}</p>
        </div>

    );
};

export default UserDetailsComponent;