import React from 'react';

/**
 * @class Lettering
 * Templates for the main joke
 */

let animationDuration = 2000;

const toAnimation = string => {
    const lettering = []
    for (let i = 0; i <= string.length - 1; i++) {
      lettering.push(<span key={Math.random()} style={{
          animationDelay: animationDuration / string.length * i + "ms"
        }
      }>{string[i]}</span>);
    }
    return lettering
}

const Lettering = ({children = ''}) => {
  return (
    <span className="lettering-container">
      {toAnimation(children)}
    </span>
  )
}

export default Lettering
