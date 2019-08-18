import React, {Component} from 'react'
import GroceryList from '../models/GroceryList';
import {Link} from 'react-router-dom'


class GroceryPage extends Component {

  render(){
  return (
    <div className="grocery-page section">
        <div className="container">
        <div className="row white title-div">
            <h4>Groceries</h4>
            <h6><Link to="/add-grocery">Add Grocery</Link></h6>
         </div>
         </div>
      <GroceryList location={this.props.location}/>
    </div>
    )
  }
}

export default GroceryPage