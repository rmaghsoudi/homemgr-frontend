import React, {Component} from 'react'
import GroceryList from '../models/GroceryList';
import {Link} from 'react-router-dom'


class GroceryPage extends Component {

  render(){
  return (
    <div className="grocery-page section">
      <h5 className="white-text">Groceries<Link to="/add-grocery" className="large material-icons">add_box</Link></h5>
      <GroceryList location={this.props.location}/>
    </div>
    )
  }
}

export default GroceryPage