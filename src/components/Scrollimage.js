import React, { PureComponent } from 'react'
import { Parallax } from 'react-scroll-parallax';

class Scrollimage extends PureComponent {
  render() {
    const { items } = this.props
    return(
      <Parallax
    className="custom-class"
    offsetYMax={0}
    offsetYMin={-70}
    tag="figure"
    >
    <p> YOYOYOaaYO </p>
    <img className="typeman" src="http://publicdomainpic.com/redesign/wp-content/uploads/man-typing.jpg" />
    </Parallax>
    )
  }
}

export default Scrollimage
