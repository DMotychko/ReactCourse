import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul className={'menu-nav'}>
                    <li><NavLink to='/'>home</NavLink></li>
                    <li><NavLink to='users'>users</NavLink></li>
                    <li><NavLink to='posts' >posts</NavLink></li>
                    <li><NavLink to='comments' >comments</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;