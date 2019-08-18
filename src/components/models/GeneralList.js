import React from 'react';
import InfoCard from './InfoCard'
import {Link} from 'react-router-dom'


const GeneralList = () => {

    return(
      <div className="general-list section">
      <div className="container">
        <div className="row white title-div">
            <h4>What You Can Do</h4>
            <h6 className="blue-text">with the HomeMgr</h6>
        </div>
        </div>
        <InfoCard page="Chores" description="Chores gives you complete control over who's doing what and when it should be completed." />
        <InfoCard page="Groceries" description="Groceries allows you to accurately keep track of your supplies and remove any guesswork." />
      </div>
    )
  }

export default GeneralList