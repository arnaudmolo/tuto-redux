import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../components/dev-tools'
import { routerMiddleware } from 'react-router-redux'

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, routerMiddleware(browserHistory), createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
