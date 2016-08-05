const myBranch = (state = {}, action) => {
  switch (action.type) {
    case 'SET_MY_BRANCH':
      return action.listItem
    default:
      return state
  }
}

export default myBranch;
