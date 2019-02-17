import React from 'react'

const Pairings = ({ currentItem }) => {
  return(
    <div>
      {console.log(currentItem)}
      <h1>{currentItem.name}</h1>
      <img src={currentItem.image} />
    </div>
  )
}

export default Pairings
