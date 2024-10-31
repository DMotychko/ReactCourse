import React from 'react';
import {NavLink} from "react-router-dom";
import './MenuComponents.css'

const MenuComponent = () => {
    return (
        <div>
            <nav>
                <ul className='nav-menu'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    <li><NavLink to='/posts'>Posts</NavLink></li>
                    <li><NavLink to='/comments'>Comments</NavLink></li>
                    <li><NavLink to='/postComments'>posts with comments</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuComponent;