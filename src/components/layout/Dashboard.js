import React, { Component } from 'react'
import OccupantList from '../models/OccupantList'
import GeneralList from '../models/GeneralList'
import {connect} from 'react-redux';

class Dashboard extends Component {
  
  
  render() {
    console.log(this.props)
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            {this.props.currentUser ? <OccupantList occupants={this.props.currentUser.occupants} /> : null}
          </div>
          {/* Depending on the grid structure, 5 pieces were used and 1 column was shifted. */}
          <div className="col s12 m5 offset-m1">
            <GeneralList />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard