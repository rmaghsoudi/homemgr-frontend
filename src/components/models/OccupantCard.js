import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteOccupant} from '../../store/actions/occupantActions'




class OccupantCard extends Component {

   handleDelete = (e) => {
    e.preventDefault()
    this.props.deleteOccupant(this.props.occupant)
  }

  render() {
  return (
        <div className="card white">
          <div className="card-content">
            <span className="card-title">{`${this.props.occupant.first_name} ${this.props.occupant.last_name}`}</span>
            <p className="cyan-text">{this.props.occupant.relationship}</p>
          </div>
          <div className="card-action">
            {/* <Link to='#' >Edit</Link> */}
            {this.props.occupant.relationship === "Account Holder" ? null :
            <Link to='#' onClick={this.handleDelete}>Delete</Link>
            }
          </div>
        </div>
      )
      }
    }

    const mapStateToProps = state => ({
      currentUser: state.login.currentUser
    })

    const mapDispatchToProps = dispatch => {
      return {
      deleteOccupant: (occupant) => dispatch(deleteOccupant(occupant))
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(OccupantCard)