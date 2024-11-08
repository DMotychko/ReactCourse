import React from 'react';
import {NavLink} from "react-router-dom";
import './HeaderComponent.css'

const HeaderComponent = () => {
    return (
        <div>
           <nav>
               <ul className='nav-list'>
                   <li><NavLink to='/'>HomePage</NavLink></li>
                   <li><NavLink to='/users'>Users Page</NavLink></li>
                   <li><NavLink to='/posts'>Posts page</NavLink></li>
                   <li><NavLink to='/comments'>Comments page</NavLink></li>
                   <li><NavLink to='/commentsPosts'>Posts + Comments page</NavLink></li>
               </ul>
           </nav>
        </div>
    );
};

export default HeaderComponent;