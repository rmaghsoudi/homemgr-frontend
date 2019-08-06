import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { userLoginFetch } from '../../store/actions/loginActions'


class Login extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.userLoginFetch(this.state)
  }


  render() {
    return (
      <div className="container">
       {localStorage.token ? <Redirect to='/' /> : null}
          <form className="white" onSubmit={this.handleSubmit}>
           <h5 className="indigo-text lighten-1">Login</h5>

          <div className="input-field">
            <input type="text" ref='username' id='username' onChange={this.handleChange}  />
            <label htmlFor="username">Username</label>
          </div>

          <div className="input-field">
            <input type="password" ref='password' id='password' onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field">
            <button className="btn indigo lighten-1">Submit</button>
            <Link to="/" ><button className="btn indigo lighten-1">Cancel</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login)