import React from 'react';
import InfoCard from './InfoCard'


const GeneralList = () => {

    return(
      <div className="general-list section">
        <h5 className="white-text">Things You Can Do</h5>
        <InfoCard page="Chores" description="Chores gives you complete control over who's doing what and when it should be completed." />
        <InfoCard page="Groceries" description="Groceries allows you to accurately keep track of your supplies and remove any guesswork." />
      </div>
    )
  }

export default GeneralList