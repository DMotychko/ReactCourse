import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/quotes'}>quotes</NavLink>
        </div>
    );
};

export default HeaderComponent;