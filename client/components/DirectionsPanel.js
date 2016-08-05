import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

class DirectionsPanel extends React.Component {
  render() {
    const {item} = this.props
    return (
      <div ref="container" className="ui accordion">
        <div className="title active">
          <i className="large icons">
            <i className="map icon"></i>
            <i className="corner red map pin icon"></i>
          </i>
          {item.branch}
          <i className="angle down icon"></i>
        </div>
        <div className="content active">
          <div className="subtitle">
            <i className="flag icon"></i>
            {item.street_address}<br />
            <i className="icon"></i>
            {item.city}, {item.state} {item.zip}
          </div>
          <div className="ui small fluid left icon action input">
            <i className="red map pin icon"></i>
            <input ref="start" type="text" placeholder="From..." />
            <div className="ui button" onClick={() => this.getDirections()}>Go</div>
          </div>
          <div ref="panel" className="content"></div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const {map} = this.props
    const search = new google.maps.places.Autocomplete(
      ReactDOM.findDOMNode(this.refs.start)
    )
    this.directionsDisplay = new google.maps.DirectionsRenderer()
    this.directionsService = new google.maps.DirectionsService()

    $(ReactDOM.findDOMNode(this.refs.container)).accordion()
  }

  getDirections() {
    const {item} = this.props
    const start = this.refs.start.value
    const end = `${item.street_address}, ${item.city}, ${item.state} ${item.zip}`

    this.directionsDisplay.setMap(this.props.map)
    this.directionsDisplay.setPanel(ReactDOM.findDOMNode(this.refs.panel))

    this.directionsService.route({
      origin: start,
      destination: end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response)

      } else {
        console.error('failed to get directions.')
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.directionsDisplay && nextProps.item.cartodb_id !== this.props.item.cartodb_id) {
      this.directionsDisplay.setMap(null)
      this.directionsDisplay.setPanel(null)
      $(ReactDOM.findDOMNode(this.refs.container)).accordion('open', 0)
      $(ReactDOM.findDOMNode(this.refs.start)).focus()
    }
  }

}
export default DirectionsPanel