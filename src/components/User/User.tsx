import React, {FC} from 'react';
import IUser from "../../models/IUser";
import './User.css'

type TypeProps = {children?: React.ReactNode, user: IUser, lift: (id: number) => void}
const User: FC<TypeProps> = ({user, lift}) => {
    return (
        <div className='user-page'>
            <p>{user.id} {user.firstName}{user.lastName} - age: {user.age}</p>
            <button onClick={() => lift(user.id)}>
                show posts
            </button>
        </div>
    );
};

export default User;