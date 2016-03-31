import React from 'react'
import UserRegistration from '../components/user-registration'

const Joke = ({content}) =>
  <li>
    <span>{content}</span>
  </li>

const JokeList = ({jokes = [{content: 'Hey, mais ca serais pas la blague par defaut du composant ?'}]}) =>
  <ul>
    {jokes.map((joke, key) => <Joke key={key} {...joke} />)}
  </ul>

const Sidebar = ({jokes, connected}) =>
  <div className='sidebar'>
    {connected ? <JokeList jokes={jokes} /> : <UserRegistration />}
  </div>

export default Sidebar
