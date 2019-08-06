import React, {Component} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {logoutUser} from '../../store/actions/loginActions';
import {connect} from 'react-redux';

class SignInLinks extends Component{

    state = {
        redirect: false
    }

    handleClick = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
        this.setState({redirect: <Redirect to="/"/>})
    }

    render(){
        return(
            <>
            <ul className="right">
            {this.state.redirect}
               <li><NavLink to='/chores'>Chores</NavLink></li>
               <li><NavLink to='/groceries'>Groceries</NavLink></li>
               <li><NavLink to='/' onClick={this.handleClick}>Log Out</NavLink></li>
            </ul>
            </>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
  })

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks)