export const updateListFromExtent = (list) =>
  ({
    type: 'UPDATE_LIST_FROM_EXTENT',
    list
  })
export const resetList = () =>
  ({
    type: 'RESET_LIST'
  })
export const search = (term) =>
  ({
    type: 'FIND_BRANCHES',
    term
  })
export const updateExtent = (extent) =>
  ({
    type: 'EXTENT_UPDATE',
    extent
  })
export const selectListItem = (listItem) =>
  ({
    type: 'SELECT_LIST_ITEM',
    listItem
  })
export const setMyBranch = (listItem) =>
  ({
    type: 'SET_MY_BRANCH',
    listItem
  })