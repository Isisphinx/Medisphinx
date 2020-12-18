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
        <Chip label={users} />
      </div>
    )
  else if (nb > 0)
    return (
      <div>
        <Chip label={users} />
        <Chip label='Echo genou' />
      </div>
    )
}


export default Chips