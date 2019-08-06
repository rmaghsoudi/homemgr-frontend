const initState={
  chores:[]
}

const choreReducer=(state=initState, action)=>{
  switch (action.type){
    case 'CREATE_CHORE':
      let newArr = state.chores.slice()
      newArr.push(action.payload)
      return {...state, chores: newArr}

    case 'DELETE_CHORE':
    let delArr = state.chores.filter(chore => chore !== action.payload)
      return {...state, chores: delArr}

    case 'GET_CHORES':
      let getArr = state.chores.slice()
      getArr = getArr.push(action.payload).flat()
      return {...state, chores: getArr}
    default:
      return state
  }
}

export default choreReducer