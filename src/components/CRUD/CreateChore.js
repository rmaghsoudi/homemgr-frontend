import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createChore} from '../../store/actions/choreActions'
import { Select, DatePicker} from 'react-materialize';

class CreateChore extends Component {

  state = {
    title: '',
    description: '',
    due: new Date().toISOString().slice(0, 10),
    redirect: false
    }

    //adding componentDidMount to prevent random crash when currentUser occupant isnt detected
    componentDidMount() {
      this.setState({
        ...this.state,
        user_id: this.props.currentUser.id,
        occupant_id: this.props.currentUser.occupants[0].id
      })
  }

  handleChange = (e) => {
    e.target ? 
    this.setState({...this.state,
      [e.target.id]: e.target.value,
    }) :
    this.setState({
      due: e,
    })
  }
 
  handleSubmit =(e) => {
    e.preventDefault();
    //prevents bad data being saved to db and constantly crashing user's app
    if (this.state.title === '' || this.state.description === '') {
      alert("Please fill all fields")
    } else {
        this.props.createChore(this.state)
        this.setState({redirect: <Redirect to="/chores"/>})
    }
  }

  render() {
    return (
      <div className="container">
      {this.state.redirect}
        <form className="white opacity" onSubmit={this.handleSubmit} >
         <h5 className="indigo-text lighten-1">Create a Chore</h5>

          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Title</label>
          </div>

          <div className="input-field">
            <textarea type="text" id='description' className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="description">Description</label>
          </div>

          <div className="input-field">
                <DatePicker
              id="due"
              defaultValue={new Date().toISOString().slice(0, 10)}
              className="datepicker"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <Select value={this.state.occupant_id} onChange={this.handleChange} id="occupant_id">
                {this.props.currentUser.occupants ? this.props.currentUser.occupants.map(occupant => {
                  return(
                    <option value={occupant.id}>{occupant.first_name}</option>
                  )
                }) : null}
            </Select>
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
    createChore: (chore) => dispatch(createChore(chore))
  }
}

const mapStateToProps = state => ({
  currentUser: state.login.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateChore)