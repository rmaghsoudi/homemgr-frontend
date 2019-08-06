import React, {Component} from 'react'
import ChoreCard from './ChoreCard'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteChore, toggleChore} from '../../store/actions/choreActions'

class ChoreList extends Component {
  render() {
  return (
    <div className="chore-list section">
      { Array.isArray(this.props.currentUser.chores) && this.props.currentUser.chores.length ? this.props.currentUser.chores.map(chore => {
        return(
          <ChoreCard chore={chore} deleteChore={this.props.deleteChore} toggleChore={this.props.toggleChore} key={chore.id} currentUser={this.props.currentUser}/>
        )}) :
           <div className="card white">
                <div className="card-content">
                  <h4 className="indigo-text lighten-1">You don't have any chores yet!</h4>
                </div>
                <div className="card-action">
                  <Link to='/create-chore'>Create a Chore!</Link>
                </div>
            </div>
      }
    </div>
  )}
  }

  const mapDispatchToProps = dispatch => ({
    deleteChore: (id) => dispatch(deleteChore(id)),
    toggleChore: (chore) => dispatch(toggleChore(chore))
  })

  const mapStateToProps = state => ({
    currentUser: state.login.currentUser
  })

export default connect(mapStateToProps, mapDispatchToProps)(ChoreList)