import { combineReducers } from 'redux'

const users = (state = {}, action) => {
  switch(action.type) {
    case 'LOGIN':
        return  {
          username: action.value
        }
    case 'LOGOUT':
      return  {
        username: ""
      }
    default: 
      return state
}
}


const listings = (state = [], action) => {
  switch(action.type) {
      case 'ADD_LISTING':
          return [ ...state, action.value ]
      case 'REMOVE_LISTING':
          const newState = [ ...state ]
          newState.splice(action.value, 1)
          return newState
      default: 
        return state
  }
}

export default combineReducers({ users, listings })