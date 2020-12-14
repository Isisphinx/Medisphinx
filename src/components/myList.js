import React from 'react'
import List from '@material-ui/core/List'
import ListItem2Patch from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import patchBaseButtonComponent from 'gatsby-material-ui-components/lib/patch-base-button-components'

const ListItem = patchBaseButtonComponent(ListItem2Patch)
// Need to patch List button to use gatsby link

const MyList = () => {
  const Users = useSelector((state) => state.fakelist.value)
  const name = Users.map((user) => (
    <ListItem button key={user.uuid}>
      <ListItemText primary={`${user.name} ${user.email} ${user.age} ans`} />
    </ListItem>
  ))

  return <List component='nav'>{name}</List>
}
export default MyList