import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'

const Myliste = () => {
  const Users = useSelector((state) => state.fakelist.value)
  const name = Users.map((user) => (
    <ListItem key={user.uuid}>
      <ListItemText>{user.name} {user.email} {user.age} ans </ListItemText>
    </ListItem>
  ))

  return (
    <div>
      <List>{name}</List>
    </div>
  )
}
export default Myliste
