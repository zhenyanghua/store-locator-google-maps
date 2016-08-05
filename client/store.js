import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer'
import branches from './data/branches'

const defaultState = {
  branches,
  currentListItem: {},
  myBranch: localStorage.getItem('myBranch') || {}
}
const store = createStore(rootReducer, defaultState)

export default store