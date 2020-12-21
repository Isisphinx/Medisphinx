import React from 'react'
import Chip from '@material-ui/core/Chip'

const Chips = ({ users }) => {
  return (
    <div>
      {users.map((users, id) => (
        <div key={users.id}>
          <Chip label={users} />
        </div>
      ))}
    </div>
  )
}

export default Chips
