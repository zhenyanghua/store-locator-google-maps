const branches = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_LIST_FROM_EXTENT':
      return {
        "type": "FeatureCollection",
        "features": action.list
      }
    default:
      return state
  }
}

export default branches;
