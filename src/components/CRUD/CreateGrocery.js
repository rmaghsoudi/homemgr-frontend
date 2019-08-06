import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchGroceries} from '../../store/actions/groceryActions'
import GroceryCard from '../models/GroceryCard';

class CreateGrocery extends Component {

  state = {
    query: ""
    }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      user_id: this.props.currentUser.id
    })
  }
 
  handleSubmit =(e) => {
    e.preventDefault();
    this.props.searchGroceries(this.state.query)
  }

  render() {
    return (
      <div className="container">
        <form className="white opacity" onSubmit={this.handleSubmit} >
         <h5 className="indigo-text lighten-1">Find Groceries</h5>

          <div className="input-field">
            <input type="text" id='query' onChange={this.handleChange} />
            <label htmlFor="query">Grocery</label>
          </div>
          
          <div className="input-field">
            <button className="btn indigo lighten-1">Search</button>
            <Link to="/" ><button className="btn indigo lighten-1">Cancel</button></Link>
          </div>
        </form>
        {Array.isArray(this.props.searchResults) && this.props.searchResults.length ?
          this.props.searchResults[0].products.map(product => <GroceryCard product={product} />) : null
        }
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