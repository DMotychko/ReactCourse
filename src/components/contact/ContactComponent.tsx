import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

const ContactComponent: FC<any> = ({contact}) => {
    return (
        <div>
            {contact.email} <NavLink to={contact.id.toString()} state={contact}>details</NavLink>
        </div>
    );
};

export default ContactComponent;