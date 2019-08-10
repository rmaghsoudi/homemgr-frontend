import React from 'react';
import {Link} from 'react-router-dom';

const About=()=>{
  return(
    <div className="container about">
    <div class="card" style={{ width: '40em', margin: '10em auto 0 auto' }}>
        <div class="card-content">
          <p>Welcome to your personal Home Manager! You'll be able to manage chores, groceries, and occupants. You can create new chores and assigning an occupant to that chore; as well as finding and adding groceries to your list to keep track of your supplies. This app was made with ReactJS, Redux, and Materialize for styling; It also utilizes a custom Ruby on Rails API on the backend as well as an external Food API for the groceries made by Spoonacular.<br />Designed and Built by: Romy Maghsoudi
          </p>
        </div>
        <div class="card-action">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

export default About