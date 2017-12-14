import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import Navigation from './components/ui/Navigation'
import Footer from './components/ui/Footer'
import Header from './components/Header'
import Parallax from './components/Parallax'
import Scrollby from './components/Scrollby'
import './App.css'

class App extends Component {
  static childContextTypes = {
    muiTheme: PropTypes.object.isRequired,
  }

  getChildContext() {
    return { muiTheme }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navigation />
          <Header />
          <Parallax />
          <Scrollby />
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
