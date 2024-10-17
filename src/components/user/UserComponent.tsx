import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {NavLink} from "react-router-dom";

const UserComponent: FC<{user: IUser}> = ({user}) => {
    return (
        <div>
            <NavLink to={user.id.toString()} state={user}><p>{user.name} - {user.email}</p></NavLink>
        </div>
    );
};

export default UserComponent;