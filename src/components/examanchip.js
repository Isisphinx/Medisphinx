import React from 'react'
import Chip from '@material-ui/core/Chip'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const Chips = ({users}) => {
 const nb = getRandomInt(2)
  if (nb === 0)
    return (
      <div>
        <Chip label={users[0]} />
      </div>
    )
  else if (nb > 0)
    return (
      <div>
        <Chip label={users[0]} />
        <Chip label={users[1]} />
      </div>
    )
}


export default Chips