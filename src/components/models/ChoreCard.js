import React from 'react'

const ChoreCard = (props) => {

  const handleDelete = (id) => {
    props.deleteChore(id)
  }

  const handleComplete = (chore) => {
    props.toggleChore(chore)
  }

  return (
    // details of a chore into the card structure.
    <div className="col s6">
    <div className="container section chore-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">{props.chore.title} <i className="material-icons" onClick={e => handleDelete(props.chore.id)}>delete</i></span>
          <p>{props.chore.description}</p>
           { props.chore.complete ? 
           <label>
            <input type="checkbox" onChange={e => handleComplete(props.chore)} checked="checked"/>
            <span>Completed?</span>
            </label>
            :
           <label>
            <input type="checkbox" onChange={e => handleComplete(props.chore)} />
            <span>Completed?</span>
           </label> }
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>For: {props.currentUser.occupants.map(occ => occ.id === props.chore.occupant_id ? occ.first_name : null) }</div>
          <div>Due: {props.chore.due.slice(0, 10)}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ChoreCard