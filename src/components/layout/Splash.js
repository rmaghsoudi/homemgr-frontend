import React from 'react';
import image from '../../images/plandesk.jpg';
import {Link} from 'react-router-dom';

const Splash=()=>{
  return(
    <div className="container">
    <div className="card large">
        <div className="card-image">
          <img src={image} alt="Office desk with equipment" />
        </div>
        <div className="card-content">
          <span className="card-title">HomeMgr</span>
          <p>The Home Manager, an elegant solution to home organization.</p>
        </div>
        <div className="card-action">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Splash