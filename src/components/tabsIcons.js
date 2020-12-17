import React from 'react'
import { Link } from 'gatsby-theme-material-ui'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import ScheduleIcon from '@material-ui/icons/Schedule'
import AppsIcon from '@material-ui/icons/Apps'
import ImageIcon from '@material-ui/icons/Image'

const useStyles = makeStyles(() => ({
  noDecor: {
    textDecoration: 'none',
  },
}))

const SimpleTabs = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab icon={<ImageIcon />} to='/' component={Link} className={classes.noDecor} />
          <Tab icon={<ScheduleIcon />} to='/historique' component={Link} className={classes.noDecor} />
          <Tab icon={<PermContactCalendarIcon />} to='/demo' component={Link} className={classes.noDecor} />
          <Tab icon={<AppsIcon />} to='/demo' component={Link} className={classes.noDecor} />
        </Tabs>
      </AppBar>
    </div>
  )
}

export default SimpleTabs
