import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import routes from '../routes'
import DevTools from './dev-tools'
import { Router } from 'react-router'

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render(props = this.props) {
    const { store, history } = props
    return (
      <Provider store={store}>
        <div>
          <Router history={history} routes={routes(store.dispatch)} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}
