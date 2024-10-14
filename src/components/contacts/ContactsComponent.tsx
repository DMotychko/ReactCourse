import React, {FC, useEffect, useState} from 'react';
import ContactComponent from "../contact/ContactComponent";
import {usersApiService} from "../../services/api.service";
import {IUserContactModel} from "../../models/IUserContactModel";

const ContactsComponent: FC = () => {
    const [users, setUsers] = useState<IUserContactModel[]>([])

    useEffect(() => {
        usersApiService.getAllUsers()
            .then(users => setUsers(users.data))
    }, []);

    return (
        <div>
            {users.map((user, index) => <ContactComponent key={index} contact={user}/>)}
        </div>
    );
};

export default ContactsComponent;