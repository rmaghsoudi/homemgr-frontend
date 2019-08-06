import React, {Component} from 'react'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteGrocery, addGrocery} from '../../store/actions/groceryActions'




class GroceryCard extends Component {

  state ={
    redirect: false
  }

   handleDelete = (e) => {
    e.preventDefault()

    this.props.deleteGrocery(this.props.product.id)
  }

  handleAdd = (e) => {
    e.preventDefault()

    let id = this.props.currentUser.id
    let arr = this.props.searchResults[0].products.filter(item => item.title == e.target.parentNode.previousSibling.innerText)
    console.log(arr)
    this.props.addGrocery(arr[0], id)
    this.setState({redirect: <Redirect to="/groceries"/>})
  }

  render() {
  return (
        <div className="row">
        {this.state.redirect}
        <div className="col s6 offset-s3">
          <div className="card">
            <div className="card-image">
              <img src={this.props.product.image} />
            </div>
            <div className="card-content">
            <span className="card-title indigo-text lighten-1">{this.props.product.title}</span>
            {this.props.location ?
                    <a className="btn-floating waves-effect waves-light indigo lighten-1"><i className="material-icons" onClick={this.handleDelete}>clear</i></a>
                    :
                    <a className="btn-floating waves-effect waves-light indigo lighten-1"><i className="material-icons" onClick={this.handleAdd}>add</i></a>
                }   
            </div>
          </div>
        </div>
      </div>
      )
      }
    }

    const mapDispatchToProps = dispatch => ({
      deleteGrocery: (id) => dispatch(deleteGrocery(id)),
      addGrocery: (item, id) => dispatch(addGrocery(item, id))
    })
  
    const mapStateToProps = state => ({
      currentUser: state.login.currentUser,
      searchResults: state.grocery.searchResults
    })
    
    export default connect(mapStateToProps, mapDispatchToProps)(GroceryCard)