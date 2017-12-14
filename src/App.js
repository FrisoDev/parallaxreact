import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './styles/theme'
import Navigation from './components/ui/Navigation'
import Footer from './components/ui/Footer'
import Header from './components/Header'
import { ParallaxProvider } from 'react-scroll-parallax';
import Scroller from './components/Scroller'
import HumbleBrag from './components/HumbleBrag'
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
          <ParallaxProvider>
          <Navigation />
          <Header />
          <Scroller />
          <HumbleBrag />
          </ParallaxProvider>
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
