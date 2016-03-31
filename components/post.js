import React from 'react'
import Button from './../components/button'
import Close from './../components/close'
import Form from './../components/form'

const Post = ({onSubmit}, value) =>
  <div className="writing">
    <Close />
    <Form onSubmit={e => onSubmit(value)}>
      <textarea
        onChange={e => value = e.nativeEvent.target.value}
        rows="5"
        maxLength="300"
        placeholder="Write your joke..."></textarea>
      <button
        className="button--red publish"
        type="submit">Publish my joke</button>
    </Form>
  </div>

export default Post
