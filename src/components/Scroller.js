import React, { PureComponent } from 'react'
import { Parallax, Background } from 'react-parallax';
import './Scroller.css'

class Scroller extends PureComponent {
  render() {
    return (
      <div>
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
        <div className="Filler">
        </div>
      </div>
    )
  }
}

export default Scroller
