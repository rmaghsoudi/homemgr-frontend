import React from 'react'
import OccupantCard from './OccupantCard'
import {Link} from 'react-router-dom'


const OccupantList = ({occupants}) => {
  return (
    <div className="occupant-list section">
    <div className="container">
        <div className="row white title-div">
            <h4>Occupants</h4>
            <h6><Link to="/add-occupant">Add Occupant</Link></h6>
         </div>
         </div>

      { occupants && occupants.map(occupant => {
        return(
          <OccupantCard occupant={occupant} key={occupant.id} />
        )
      })}

    </div>
  )
}

export default OccupantList