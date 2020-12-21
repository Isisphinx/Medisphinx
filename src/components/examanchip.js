import React from 'react'
import Chip from '@material-ui/core/Chip'

const Chips = ({ users }) => {
  return (
    <div>
      {users.map((users, id) => ( 
          <Chip key={id} label={users} />
      ))}
    </div>
  )
}

export default Chips
