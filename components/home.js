import React from 'react'
import MainJoke from './../components/main-joke'
import JokeList from './../components/joke-list'
import Button from './../components/button'
import Sidebar from './../containers/sidebar-container'
import JokesContainer from './../containers/jokes-container'

const ConnectedJokes = JokesContainer(props =>
  <div>
    <MainJoke {...props.jokes[0]} />
    <JokeList jokes={props.jokes} />
  </div>
)

const Home = () =>
  <div>
    <ConnectedJokes />
    <Sidebar />
    <Button to='/post'>Publish my joke</Button>
  </div>

export default Home
