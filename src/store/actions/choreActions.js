import {getProfileFetch} from './loginActions';


export const createChore=(chore)=>{
  const token = localStorage.token;
      if (token){
    return dispatch => {
      return fetch("https://homemgr-api.herokuapp.com/api/chores", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({chore})
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
  
  export const deleteChore=(id)=>{
    const token = localStorage.token;
      if (token){
      return dispatch => {
        return fetch(`https://homemgr-api.herokuapp.com/api/chores/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + token
          }
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

    export const toggleChore=(chore)=>{
      const token = localStorage.token;
      let toggle = !chore.complete
        if (token){
        return dispatch => {
          return fetch(`https://homemgr-api.herokuapp.com/api/chores/${chore.id}`, {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: "Bearer " + token
            },
            body: JSON.stringify({complete: toggle})
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