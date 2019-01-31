import React from 'react'
let sedan = require('../../../assets/cars/icons8-sedan-96.png')
let sedan1 = require('../../../assets/cars/icons8-car-96.png')

const carPart = (props) => {
  let part = null
  switch (props.type) {
    case('sedan'):
      part = <img src={sedan} />
      break;
    case('sedan-1'):
      part = <img src={sedan1}></img>
      break;
  }
  return part
}

export default carPart