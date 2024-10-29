import React from 'react';
import {NavLink} from "react-router-dom";
import './MenuComponent.css'

const MenuComponent = () => {
    return (
        <div>
            <ul className='nav'>
                <li><NavLink to='/'>Home Page</NavLink></li>
                <li><NavLink to='auth/login'>Login Page</NavLink></li>
                <li><NavLink to='auth/products'>Products Page</NavLink></li>
            </ul>
        </div>
    );
};

export default MenuComponent;