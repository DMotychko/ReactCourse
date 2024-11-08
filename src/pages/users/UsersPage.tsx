import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {usersSliceActions} from "../../redux/slices/usersSlice";

const UsersPage = () => {
    const usersSliceState = useAppSelector(store => store.usersSlice)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(usersSliceActions.loadUsers())
    }, []);
    return (
        <div>
            {usersSliceState.users.map(user => <div key={user.id}>{user.username}</div>)}
        </div>
    );
};

export default UsersPage;