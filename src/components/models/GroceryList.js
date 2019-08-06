import React, {Component} from 'react'
import GroceryCard from './GroceryCard'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteChore} from '../../store/actions/choreActions'

class GroceryList extends Component {
  render() {
  return (
    <div className="container">
      

    {Array.isArray(this.props.groceries) && this.props.groceries.length ?
    this.props.groceries.map(item => <GroceryCard product={item} location={this.props.location}/>) :
      <div className="card white">
                <div className="card-content">
                  <h4 className="indigo-text lighten-1">You don't have any groceries yet!</h4>
                </div>
                <div className="card-action">
                  <Link to='/add-grocery'>Add Some Groceries!</Link>
                </div>
            </div>
    }


    </div>
  )}
  }

  const mapDispatchToProps = dispatch => ({
    deleteChore: (id) => dispatch(deleteChore(id))
  })

  const mapStateToProps = state => ({
    groceries: state.login.currentUser.grocery_items,
    currentUser: state.login.currentUser
  })

export default connect(mapStateToProps, mapDispatchToProps)(GroceryList)