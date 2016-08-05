import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class MyBranch extends React.Component {
  render() {
    const {properties} = this.props.branch
    return(
      <div ref="container" className="ui pointing dropdown link item">
        <span className="text">{properties ? properties.branch : 'My Branch'}</span>
        <i className="dropdown icon"></i>
        <div className="menu">
          <div className="item" onClick={() => this.updateExtent()}>
            <i className="map icon"></i>
            <span className="text">Go to</span>
          </div>
        </div>
      </div>
    )
  }

  updateExtent() {
    const {geometry} = this.props.branch
    const {map} = this.props
    if (!geometry) return
    const coords = geometry.coordinates
    const point = new google.maps.LatLng(coords[1], coords[0])
    map.panTo(point)
    map.setZoom(16)
  }

  componentDidMount() {
    $(ReactDOM.findDOMNode(this.refs.container)).dropdown({
      action: 'select'
    })
  }
}

export default MyBranch