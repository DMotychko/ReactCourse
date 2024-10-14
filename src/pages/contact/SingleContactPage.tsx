import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUserContactModel} from "../../models/IUserContactModel";

const SingleContactPage = () => {
    const [contact, setContact] = useState<IUserContactModel | null>(null)
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if(state) {
            setContact(state)
        }
    }, [id]);

    return (
        <div>
            {contact && contact.name}
        </div>
    );
};

export default SingleContactPage;