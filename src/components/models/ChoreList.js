import React, {Component} from 'react'
import ChoreCard from './ChoreCard'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {deleteChore, toggleChore} from '../../store/actions/choreActions'
import { Select } from 'react-materialize';


class ChoreList extends Component {

  state = {
    filter: "",
    sort: "",
    chores: null
  }

  sortChores = (e) => {
    let chores = this.props.currentUser.chores

    chores = chores.sort(this.compareValues(e.target.value))

    this.setState({...this.state, sort: e.target.value, chores: chores})
  }

  filterChores = (e) => {
    let chores = this.props.currentUser.chores

    if (e.target.value === "complete") {chores = chores.filter(chore => chore.complete === true)}
    else if (e.target.value === "due") {
      let date = new Date()
      chores = chores.filter(chore => chore.due.slice(0, 10) == date.toISOString().slice(0, 10))
    }
    else {chores = chores.filter(chore => chore.complete !== true)}

    this.setState({...this.state, filter: e.target.value, chores: chores})
  }

  compareValues = (key, order='asc') => {
    return function(a, b) {
      if(!a.hasOwnProperty(key) || 
         !b.hasOwnProperty(key)) {
        return 0; 
      }
      
      const varA = (typeof a[key] === 'string') ? 
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ? 
        b[key].toUpperCase() : b[key];
        
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order == 'desc') ? 
        (comparison * -1) : comparison
      );
    };
  }

  render() {
  return (
    <div className="chore-list section">
    <div className="row white">

        <div className="col s2 offset-s3" >
          <Select value={this.state.filter} onChange={this.filterChores}>
						<option value="" disabled>
						Filter By
						</option>
						<option value="incomplete">
						Incomplete
						</option>
						<option value="complete">
						Complete
						</option>
						<option value="due">
						Due Today
						</option>
					</Select>
				</div>

        <div className="col s2">
        <h4>Chores</h4>
        <h6><Link to="/create-chore">Add Chore</Link></h6>
        </div>

        <div className="col s2 offset-s1" >
          <Select value={this.state.sort} onChange={this.sortChores} >
						<option value="" disabled>
						Sort By
						</option>
						<option value="due">
						Due Date
						</option>
						<option value="occupant_id">
						Occupant
						</option>
						<option value="complete">
						Incomplete
						</option>
					</Select>
				</div>
        </div>

        <div className="row">
      { this.state.chores ? this.state.chores.map(chore => {
        return(
          <ChoreCard chore={chore} deleteChore={this.props.deleteChore} toggleChore={this.props.toggleChore} key={chore.id} currentUser={this.props.currentUser}/>
        )})
            :      
      Array.isArray(this.props.currentUser.chores) && this.props.currentUser.chores.length ? this.props.currentUser.chores.map(chore => {
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