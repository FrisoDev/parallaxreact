import React, { PureComponent } from 'react'

class Header extends PureComponent {
  render() {
    const { items } = this.props
    return(
      <div className="Header">
      <p>Yoko Ono</p>
      </div>
    )
  }
}

export default Header
