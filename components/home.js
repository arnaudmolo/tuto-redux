import React from 'react'
import MainJoke from './../components/main-joke'
import JokeList from './../components/joke-list'
import Button from './../components/button'
import Sidebar from './../containers/sidebar-container'

const Home = () =>
  <div>
    <MainJoke />
    <JokeList />
    <Sidebar />
    <Button to='/post'>Publish my joke</Button>
  </div>

export default Home
