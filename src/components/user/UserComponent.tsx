import React, {FC} from 'react';
import {IUser} from "../../models/IUser";

const UserComponent: FC<{user: IUser}> = ({user}) => {
    return (
        <div>
            <p>{user.name} - {user.email}</p>
        </div>
    );
};

export default UserComponent;