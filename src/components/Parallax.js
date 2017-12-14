import React, { PureComponent } from 'react'
import Scrollimage from './Scrollimage'
import { ParallaxProvider } from 'react-scroll-parallax';
import './Parallax.css'
class Parallax extends PureComponent {
  render() {
    return(
      <ParallaxProvider>
      <Scrollimage />
      </ParallaxProvider>
    )
  }
}

export default Parallax
