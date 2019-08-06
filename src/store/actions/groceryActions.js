import {getProfileFetch} from './loginActions';

export const searchGroceries=(query)=>{
  const token = localStorage.token;
      if (token){
    return dispatch => {
      return fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?query=${query}&number=5`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          "X-RapidAPI-Key": 'd4c7665642msh2e8cab74dd1f698p13db20jsn278cfc0bced1'
        }
      }).then(resp => resp.json())
      .then(data => {
        if (data.message){}
        else {
          dispatch({type: 'SEARCH_GROCERIES', payload: data})
        }
      })
    }
    }
  }

  export const addGrocery=(item, id)=>{
    const token = localStorage.token;
  
    let title = item.title
    let image = item.image

    if (token){
    return dispatch => {
      return fetch("http://localhost:3000/api/grocery_items", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          title: title,
          image: image,
          user_id: id
        })
      }).then(resp => resp.json())
      .then(data => {
        if (data.message){}
        else {
          dispatch({ type: 'LOGIN_USER', payload: data.user })
          // getProfileFetch()
        }
      })
    }
  }
  }
  
  export const deleteGrocery=(id)=>{
    const token = localStorage.token;
      if (token){
      return dispatch => {
        return fetch(`http://localhost:3000/api/grocery_items/${id}`, {
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