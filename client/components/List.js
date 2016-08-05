import React from 'react'
import ListItem from './ListItem'
import DirectionsPanel from './DirectionsPanel'

class List extends React.Component {
  render() {
    const { branches } = this.props
    return (
      <div className="ui big celled list">
        {this.renderDirectionsPanel()}
        { branches.features.map((branch, i) =>
          <ListItem branch={branch}
                    key={i}
                    {...this.props}
          />) }
      </div>
    )
  }

  renderDirectionsPanel() {
    const item = this.props.currentListItem.properties
    if (item) {
      return (
        <div className="item">
          <DirectionsPanel item={item} map={this.props.map} />
        </div>
      )
    }
  }
}

export default List