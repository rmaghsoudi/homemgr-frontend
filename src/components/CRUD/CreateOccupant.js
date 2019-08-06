import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createOccupant} from '../../store/actions/occupantActions'

class CreateOccupant extends Component {

  state = {
    first_name: '',
    last_name: '',
    relationship: '',
    redirect: false
    }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      user_id: this.props.currentUser.id
    })
  }
 
  handleSubmit =(e) => {
    e.preventDefault();
    //Transfer state in action
    this.props.createOccupant(this.state)
    this.setState({redirect: <Redirect to="/"/>})
  }

  render() {
    return (
      <div className="container">
      {this.state.redirect}
        <form className="white opacity" onSubmit={this.handleSubmit} >
         <h5 className="indigo-text lighten-1">Add an Occupant</h5>
          <div className="input-field">
            <input type="text" id='first_name' onChange={this.handleChange} />
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field">
            <input type="text" id='last_name' onChange={this.handleChange} />
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="input-field">
            <input type='text' id="relationship" onChange={this.handleChange} />
            <label htmlFor="relationship">Relationship</label>
          </div>
          <div className="input-field">
            <button className="btn indigo lighten-1">Create</button>
            <Link to="/" ><button className="btn indigo lighten-1">Cancel</button></Link>
          </div>
        </form>
      </div>
    )
  }
}

//Access your occupant creation action
const mapDispatchToProps = dispatch => {
  return {
    createOccupant: (occupant) => dispatch(createOccupant(occupant))
  }
}

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateOccupant)