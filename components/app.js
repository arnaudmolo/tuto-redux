import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Header from '../components/header'

const App = ({ children }) =>
  <div>
    <Header />
    {children}
  </div>

export default App
