import React from 'react'
import OccupantCard from './OccupantCard'
import {Link} from 'react-router-dom'

const OccupantList = ({occupants}) => {
  return (
    <div className="occupant-list section">
      <h5 className="white-text">Occupants <Link to="/add-occupant" className="large material-icons">add_box</Link></h5>

      { occupants && occupants.map(occupant => {
        return(
          <OccupantCard occupant={occupant} key={occupant.id} />
        )
      })}

    </div>
  )
}

export default OccupantList