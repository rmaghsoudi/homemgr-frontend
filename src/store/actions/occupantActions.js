export const createOccupant=(occupant)=>{
  const token = localStorage.token;
  if (token){
  return dispatch => {
    return fetch("https://homemgr-api.herokuapp.com/api/occupants", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: "Bearer " + token
      },
      body: JSON.stringify({occupant})
    }).then(resp => resp.json())
    .then(data => {
      if (data.message){}
      else {
        dispatch({ type: 'LOGIN_USER', payload: data.user })
      }
    })
  }
}
}

export const deleteOccupant=(occupant)=>{
  const token = localStorage.token;
      if (token){
    return dispatch => {
      return fetch(`https://homemgr-api.herokuapp.com/api/occupants/${occupant.id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token
        }
      }).then(resp => resp.json())
      .then(data => {
        if (data.message){}
        else {
          dispatch({ type: 'LOGIN_USER', payload: data.user })
        }
      })
    }
  }
}