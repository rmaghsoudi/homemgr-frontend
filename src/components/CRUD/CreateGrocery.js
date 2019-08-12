import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchGroceries} from '../../store/actions/groceryActions'
import GroceryCard from '../models/GroceryCard';
import { Select, Range } from 'react-materialize';


class CreateGrocery extends Component {

  state = {
    query: '',
    quantity: 1,
    category: ''
    }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
      user_id: this.props.currentUser.id
    })
  }
 
  handleSubmit =(e) => {
    e.preventDefault();
    if (this.state.query === '' || this.state.category === ''){ alert("Please fill in all fields") }
    else { this.props.searchGroceries(this.state) }
  }

  render() {
    return (
      <div className="container">
        <form className="white opacity" onSubmit={this.handleSubmit} >
         <h5 className="indigo-text lighten-1">Find Groceries</h5>

          <div className="container">
          <div className="input-field">
            <input type="text" id='query' onChange={this.handleChange} />
            <label htmlFor="query">Grocery</label>
          </div>
          </div>

          <div className="container">
          <div className="input-field">
            <Range min="1" max="20" id="quantity" value={this.state.quantity} onChange={this.handleChange} />
          </div>
          </div>

          <div className="container">
          <div className="input-field">
            <Select value={this.state.category}  id="category" onChange={this.handleChange}>
              <option value="" disabled>
              Category
              </option>
              <option value="Fresh Ingredients">
              Fresh Ingredients
              </option>
              <option value="Food">
              Food
              </option>
              <option value="Cleaning">
              Cleaning
              </option>
              <option value="General">
              General
              </option>
            </Select>
            </div>
          </div>
          
          <div className="input-field">
            <button className="btn indigo lighten-1">Search</button>
            <Link to="/" ><button className="btn indigo lighten-1">Cancel</button></Link>
          </div>
        </form>
        <div className="row">
        {Array.isArray(this.props.searchResults) && this.props.searchResults.length ?
          this.props.searchResults.map(product => <GroceryCard product={product} />) : null
        }
        </div>              
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    searchGroceries: (query) => dispatch(searchGroceries(query))
  }
}

const mapStateToProps = state => ({
  currentUser: state.login.currentUser,
  searchResults: state.grocery.searchResults
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateGrocery)