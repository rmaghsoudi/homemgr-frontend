const initState={
  occupants:[]
}

const occupantReducer=(state=initState, action)=>{
  switch (action.type){
    case 'CREATE_OCCUPANT':
      let newArr = state.occupants.slice()
      newArr.push(action.payload)
      return {...state, occupants: newArr}

    case 'ADD_OCCUPANT':
    let addArr = state.occupants.slice()
      newArr.push(action.payload)
      return {...state, occupants: addArr}

    case 'DELETE_OCCUPANT':
    let delArr = state.occupants.filter(occupant => occupant !== action.payload)
      return {...state, occupants: delArr}
    default:
      return state
  }
}

export default occupantReducer