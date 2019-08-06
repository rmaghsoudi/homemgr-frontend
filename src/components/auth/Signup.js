import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { userPostFetch } from  '../../store/actions/loginActions';

class Signup extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    this.props.userPostFetch(this.state)
  }

  render() {
    return (
      <div className="container">
       {localStorage.token ? <Redirect to='/' /> : null}
      <form className="white" onSubmit={this.handleSubmit}>
      <h5 className="indigo-text lighten-1">Sign Up</h5>

         <div className="input-field">
            <input type="text" id='username' onChange={this.handleChange} value={this.state.username} />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field">
            <input type="text" id='first_name' onChange={this.handleChange} value={this.state.first_name} />
            <label htmlFor="first_name">First Name</label>
          </div>
          
          <div className="input-field">
            <input type="text" id='last_name' onChange={this.handleChange} value={this.state.last_name} />
            <label htmlFor="last_name">Last Name</label>
          </div>

          <div className="input-field">
            <input type="password" id='password' onChange={this.handleChange} value={this.state.password} />
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <button className="btn indigo lighten-1">Submit</button>
            <Link to="/" ><button className="btn indigo lighten-1">Cancel</button></Link>
          </div>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);