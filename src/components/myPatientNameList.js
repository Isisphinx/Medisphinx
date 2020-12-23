import React from 'react'
import List from '@material-ui/core/List'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import patchBaseButtonComponent from 'gatsby-material-ui-components/lib/patch-base-button-components'

const ListItem = patchBaseButtonComponent(MuiListItem)

const PatientNameList = ({ users }) => {
    return (
        <List component='nav'>
          {users.map((user) => (
            <ListItem button key={user.uuid}>
              <ListItemText primary={`${user.lastname} ${user.firstname} 10/05/1990`}/>
            </ListItem>
          ))}
        </List>
      )

}

const MyPatientNameList = () => {
    const users = useSelector((state) => state.fakelist.value)
  
    return users ? <PatientNameList users={users} /> : 'loading'
  }
  export default MyPatientNameList