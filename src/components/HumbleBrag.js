import React, { PureComponent } from 'react'
import './HumbleBrag.css'

class HumbleBrag extends PureComponent {
  render() {
    return(
      <div className="HumbleBrag">
      <h2>Experienced in:</h2>
      <ul className="Experience" tag="askdjkasj">
      <li>JavaScript & React</li>
      <li>Node.js</li>
      <li>Express API</li>
      <li>HTML5</li>
      <li>CSS</li>
      </ul>
      <h2>Skills</h2>
      <ul className="Skills">
      <li>Working in TDD cycle</li>
      <li>Creating and working in SCRUM environment</li>
      <li>Extensive JavaScript & React knowledge</li>
      </ul>
      </div>
    )
  }
}

export default HumbleBrag
