import React from 'react';
import {NavLink} from "react-router-dom";
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div className='header-component'>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/quotes'}>quotes</NavLink>
        </div>
    );
};

export default HeaderComponent;