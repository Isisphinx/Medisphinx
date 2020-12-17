import React from 'react'
import List from '@material-ui/core/List'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import patchBaseButtonComponent from 'gatsby-material-ui-components/lib/patch-base-button-components'

const ListItem = patchBaseButtonComponent(MuiListItem)
// Need to patch List button to use gatsby link

const MyHistorique = () => {
  const Users = useSelector((state) => state.fakelist.value)
  const name = Users.map((user) => (
    <ListItem button key={user.uuid}>
      <ListItemText primary={`${user.lastname} ${user.firstname} ${user.age} ans`} secondary={user.examen} />
    </ListItem>
  ))

  return <List component='nav'>{name}</List>
}
export default MyHistorique