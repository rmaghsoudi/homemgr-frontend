import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {logoutUser} from '../../store/actions/loginActions';
import {connect} from 'react-redux';

class SignInLinks extends Component{

    handleClick = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        this.props.logoutUser()
    }

    render(){
        return(
            <>
            <ul className="right">
               <li><NavLink to='/chores'>Chores</NavLink></li>
               <li><NavLink to='/groceries'>Groceries</NavLink></li>
               <li onClick={this.handleClick}><NavLink to='/'>Log Out</NavLink></li>
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