import {getProfileFetch} from './loginActions';

export const searchGroceries=(state)=>{
  const token = localStorage.token;
  let cat = state.category
  let num = parseInt(state.quantity)
  console.log("state", state)
      if (token){
    return dispatch => {
      return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=${state.query}&number=10`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          "X-RapidAPI-Key": 'd4c7665642msh2e8cab74dd1f698p13db20jsn278cfc0bced1'
        }
      }).then(resp => resp.json())
      .then(data => {
        if (data.message){}
        else {
          data.products = data.products.map(prod => prod = {...prod, category: cat, quantity: num})
          console.log("products", data.products)
          dispatch({type: 'SEARCH_GROCERIES', payload: data.products})
        }
      })
    }
    }
  }

  export const addGrocery=(item, id)=>{
    const token = localStorage.token;

    let title = item.title
    let image = item.image
    let num = item.quantity
    let cat = item.category
    console.log("number", num)
    console.log("item", item)
    console.log("item.quantity", item.quantity)


    if (token){
    return dispatch => {
      return fetch("https://homemgr-api.herokuapp.com/api/grocery_items", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          title: title,
          image: image,
          user_id: id,
          category: cat,
          quantity: num
        })
      }).then(resp => resp.json())
      .then(data => {
        if (data.message){}
        else {
          dispatch({ type: 'LOGIN_USER', payload: data.user })
          dispatch({ type: 'ADD_GROCERY'})
        }
      })
    }
  }
  }
  
  export const deleteGrocery=(id)=>{
    const token = localStorage.token;
      if (token){
      return dispatch => {
        return fetch(`https://homemgr-api.herokuapp.com/api/grocery_items/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token
          }
        }).then(resp => resp.json())
        .then(data => {
          console.log(data)
          if (data.message){}
          else {
            dispatch({ type: 'LOGIN_USER', payload: data.user })
            // getProfileFetch()
          }
        })
      }
      }
    }