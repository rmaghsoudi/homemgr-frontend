const initState={
  searchResults:[]
}
const groceryReducer=(state=initState, action)=>{
  switch (action.type){
    case 'SEARCH_GROCERIES':
      let newArr = state.searchResults.slice()
      newArr = action.payload
      return {...state, searchResults: newArr}
    case 'ADD_GROCERY':
      let arr = []
      return {...state, searchResults: arr}

    default:
      return state
  }
}

export default groceryReducer