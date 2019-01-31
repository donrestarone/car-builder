import React, {Component} from 'react'
import PropTypes from 'prop-types'

let sedan = require('../../../assets/cars/icons8-sedan-96.png')
let sedan1 = require('../../../assets/cars/icons8-car-96.png')

class CarPart extends Component {
  render () {
    let part = null
    switch (this.props.type) {
      case('sedan'):
        part = <img src={sedan} />
        break;
      case('sedan-1'):
        part = <img src={sedan1}></img>
        break;
    }
    return part
  }
}

CarPart.propTypes = {
  type: PropTypes.string.isRequired
}
export default CarPart