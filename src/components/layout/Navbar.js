import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return(
        //navbar forming class
        <nav className="indigo lighten-1">
            <div className="nav-wrapper">
                <Link className="brand-logo" to='/'><i className="medium material-icons">home</i>HomeMgr</Link>
                { localStorage.token ? <SignedInLinks /> : <SignedOutLinks /> }
            </div>
        </nav>
    )
}

export default Navbar