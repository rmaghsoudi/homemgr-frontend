import React from 'react';
import {NavLink} from 'react-router-dom';

const SignOutLinks=()=>{
    return(
        <ul className="right">
           <li><NavLink to='/about'>About</NavLink></li>
           <li><NavLink to='/signup'>Sign Up</NavLink></li>
           <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
    )
}

export default SignOutLinks