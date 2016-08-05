import { combineReducers } from 'redux';
import branches from './branches'
import currentListItem from './currentListItem'
import myBranch from './myBranch'

const rootReducer = combineReducers({
  branches,
  currentListItem,
  myBranch
})

export default rootReducer

