import React from 'react'
import Lettering from './lettering'

const MainJoke = ({content = 'Blague principale !'}) =>
  <div className="joke-container">
    <h1>
      <Lettering>{content}</Lettering>
    </h1>
  </div>

export default MainJoke
