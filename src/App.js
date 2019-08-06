import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/layout/Dashboard'
import ChorePage from './components/layout/ChorePage'
import GroceryPage from './components/layout/GroceryPage'
import About from './components/layout/About'
import Splash from './components/layout/Splash';
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'
import CreateOccupant from './components/CRUD/CreateOccupant'
import CreateChore from './components/CRUD/CreateChore'
import CreateGrocery from './components/CRUD/CreateGrocery'
import {connect} from 'react-redux';
import {getProfileFetch} from './store/actions/loginActions';


class App extends Component {

  componentDidMount = () => {
    this.props.getProfileFetch()
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar currentUser={this.props.currentUser} />
        <Switch>
          {localStorage.token ? <Route exact path='/' render={(props) => <Dashboard {...props} currentUser={this.props.currentUser} />} /> : <Route exact path='/' component={Splash} /> }
          <Route path='/chores' render={(props) => <ChorePage {...props} currentUser={this.props.currentUser} />} />
          <Route path='/add-occupant' component={CreateOccupant} />
          <Route path='/create-chore' component={CreateChore} />
          <Route path='/add-grocery' component={CreateGrocery} />
          <Route path='/groceries' component={GroceryPage} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <Route path='/about' component={About} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);