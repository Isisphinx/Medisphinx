import React from "react"
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ScheduleIcon from '@material-ui/icons/Schedule';
import AppsIcon from '@material-ui/icons/Apps';
import ImageIcon from '@material-ui/icons/Image';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const tabs_icons = () => {
  return (
    <div>
      <ImageIcon/>
      <ScheduleIcon/>
      <PermContactCalendarIcon/>
      <AppsIcon/>
    </div>
    )
}

export default tabs_icons


//git@github.com:Isisphinx/Medisphinx.git