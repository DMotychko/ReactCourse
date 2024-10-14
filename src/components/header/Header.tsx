import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <span><NavLink to={'about'}>about </NavLink></span>
            <span><NavLink to={'contacts'}> contact</NavLink></span>
            <hr/>
        </div>
    );
};

export default Header;