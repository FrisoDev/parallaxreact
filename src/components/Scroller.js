import React, { PureComponent } from 'react'
import { Parallax, Background } from 'react-parallax';
import Lorem from 'react-lorem-component'
import './Acco.css'
import './Scroller.css'

class Scroller extends PureComponent {
  render() {
    return (
      <div>
      <div className="LoremContainer">
      <div className="Acco">
      <Lorem count="3" mode='list'/>
      </div>
      </div>
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
        <div className="LoremContainer">
        <div className="Acco">
        <Lorem count="3" mode='list'/>
        </div>
        </div>
      </div>
    )
  }
}

export default Scroller
