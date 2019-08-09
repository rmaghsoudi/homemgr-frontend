import React, {Component} from 'react'
import ChoreList from '../models/ChoreList';
import {Link} from 'react-router-dom';

class ChorePage extends Component {

  render(){
  return (
    <div className="chore-page section">
      
      <ChoreList />
    </div>
    )
  }
}

export default ChorePage