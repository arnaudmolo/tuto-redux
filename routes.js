import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/app'
import Home from './components/home'
import Post from './containers/post-container'

import { fetchJokes } from './actions/jokes-actions'

export default () => (
  <Route path="/" component={App}>
    <IndexRoute
      component={Home} />
    <Route path="/post"
       component={Post} />
  </Route>
)
