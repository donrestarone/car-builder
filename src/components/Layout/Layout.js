import React from 'react'
import Aux from '../../hoc/Aux'

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className="mt-3">
      {props.children}
    </main>
  </Aux>
)

export default layout