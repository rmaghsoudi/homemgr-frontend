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
    let arr = this.props.searchResults[0].products.filter(item => item.title == e.target.parentNode.previousSibling.innerText.slice(0, -10))

    this.props.addGrocery(arr[0], id)
    this.setState({redirect: <Redirect to="/groceries"/>})
  }

  render() {
  return (
    <>
        <div className="col s4">

        {this.state.redirect}
        <div className="card small">
        <div className="card-image waves-effect waves-block waves-light grocery-image">
          <img className="activator" src={this.props.product.image} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.product.title}<i className="material-icons right">more_vert</i></span>
          {this.props.location ?
            <p><a href="#" onClick={this.handleDelete} >Delete</a></p>
                        :
            <p><a href="#" onClick={this.handleAdd} >Add</a></p>
          }   
          
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.product.title}<i className="material-icons right">close</i></span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
      </div>
  </>
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