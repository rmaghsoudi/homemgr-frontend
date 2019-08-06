import React, {Component} from 'react'
import ChoreList from '../models/ChoreList';
import {Link} from 'react-router-dom';

class ChorePage extends Component {

  render(){
  return (
    <div className="chore-page section">
      <h5 className="white-text">Chores<Link to="/create-chore" className="large material-icons">add_box</Link></h5>
      <ChoreList />
    </div>
    )
  }
}

export default ChorePage