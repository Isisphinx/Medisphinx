import React from 'react'
import Chip from '@material-ui/core/Chip'

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

export default function Chips() {
  const nb = getRandomInt(2)

  console.log(nb)

  if (nb === 0)
    return (
      <div>
        <Chip label='radio Genou' />
      </div>
    )
  else if (nb > 0)
    return (
      <div>
        <Chip label='radio Genou' />
        <Chip label='Echo genou' />
      </div>
    )
}
