import React from 'react'

class InfoWindow extends React.Component {
  render() {
    const {feature} = this.props
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{feature.getProperty('branch')}</div>
        </div>
        <div className="content">
          <div className="description">
            <i className="flag icon"></i>
            {feature.getProperty('street_address')}<br />
            <i className="icon"></i>
            {feature.getProperty('city')}, {feature.getProperty('state')} {feature.getProperty('zip')}
          </div>
          <div className={feature.getProperty('br_group') === 'PAS' ? 'description transition hidden' : 'description' }>
            <i className="call icon"></i>
            <span>{feature.getProperty('br_manager_phone')}</span>
          </div>
          <br />
          <div className={feature.getProperty('br_group') === 'PAS' ? 'transition hidden' : '' }>
            <div className="description">
              <strong>Monday:</strong> {feature.getProperty('monday_open')} AM - {feature.getProperty('monday_close')} PM
            </div>
            <div className="description">
              <strong>Tuesday:</strong> {feature.getProperty('tuesday_open')} AM - {feature.getProperty('tuesday_close')} PM
            </div>
            <div className="description">
              <strong>Wednesday:</strong> {feature.getProperty('wednesday_open')} AM - {feature.getProperty('wednesday_close')} PM
            </div>
            <div className="description">
              <strong>Thursday:</strong> {feature.getProperty('thursday_open')} AM - {feature.getProperty('thursday_close')} PM
            </div>
            <div className="description">
              <strong>Friday:</strong> {feature.getProperty('friday_open')} AM - {feature.getProperty('friday_close')} PM
            </div>
          </div>

        </div>
        <div className="content">
          <a href={'#/' + feature.getProperty('branch')} className="ui button">
            <i className="external icon"></i>Details
          </a>
          <button className="ui button" onClick={() => this.getDirections(feature.getProperty('cartodb_id'))}>
            <i className="red map pin icon"></i>Directions
          </button>
        </div>
      </div>
    )
  }

  getDirections(id) {
    const branch = this.props.branches.features.filter(feature => feature.properties.cartodb_id === id)[0]
    this.props.selectListItem(branch)
  }
}

export default InfoWindow