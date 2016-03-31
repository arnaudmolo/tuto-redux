import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import Post from './components/post'

import { fetchJokes } from './actions/jokes-actions'

export default (dispatch) => (
  <Route path="/" component={App}>
    <IndexRoute
      component={Home} onEnter={onEnterIndex(dispatch)} />
    <Route path="/post"
       component={Post} />
  </Route>
)

const onEnterIndex = dispatch => (nextState, replaceState) => {
  return dispatch(fetchJokes())
}
