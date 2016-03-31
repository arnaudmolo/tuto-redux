import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import Post from './../components/post'
import UserRegistration from './../components/user-registration'
import UserContainer from './user-container'

import { postJoke } from './../actions/jokes-actions'

function mapDispatchToProps (dispatch, ownProps) {
  return {
    onSubmit: async value => {
      await dispatch(postJoke(value))
      dispatch(push("/"))
    }
  }
}

const Visible = UserContainer(({connected, onSubmit}) =>
  connected ? <Post onSubmit={onSubmit} /> : <UserRegistration />
)

const PostContainer = connect(null, mapDispatchToProps)(Visible)

export default PostContainer
