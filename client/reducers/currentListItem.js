const currentListItem = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_LIST_ITEM':
      return action.listItem
    default:
      return state
  }
}

export default currentListItem;
