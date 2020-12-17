import React from 'react'
import List from '@material-ui/core/List'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import patchBaseButtonComponent from 'gatsby-material-ui-components/lib/patch-base-button-components'
import Chips from './examanchip'
import CreateIcon from '@material-ui/icons/Create'
import IconButton from '@material-ui/core/IconButton'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'

const ListItem = patchBaseButtonComponent(MuiListItem)
// Need to patch List button to use gatsby link

const MyList = () => {
  const Users = useSelector((state) => state.fakelist.value)
  const name = Users.map((user) => (
    <ListItem button key={user.uuid}>
      <ListItemText primary={`${user.lastname} ${user.firstname} ${user.age} ans`} secondary={<Chips />} />
      {user.lastname.substring(0, 3)}
      <ListItemSecondaryAction>
        <IconButton>
          <CreateIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  ))

  return <List component='nav'>{name}</List>
}
export default MyList
