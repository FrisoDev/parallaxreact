import React, { PureComponent } from 'react'
import { Parallax, Background } from 'react-parallax';
import './Scroller.css'

class Scroller extends PureComponent {
  render() {
    return (
      <div>
      <h2>The quick brown fox jumps over the lazy dog.</h2>
        <Parallax className="ParaScroll"
         strength={700}>
         <Background>
         <img src="http://demo.select-themes.com/brick1/wp-content/uploads/2015/04/man-typing-on-laptop.jpg"/>
         <div style={{
               width: "100vh",
               height: "1098765456789098765456789px",
              }}></div>
          </Background>
        </Parallax>
        <h2>I currently have 4 windows open up… and I don’t know why.</h2>
      </div>
    )
  }
}

export default Scroller
