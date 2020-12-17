import React from 'react'
import MyHistorique from '../components/myHistorique'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import ToggleButton from '../components/RadioButton'

const Historique = () =>
  <div>
    <TextField id="standard-basic" label={<SearchIcon/>} />
    <ToggleButton/>
    <MyHistorique />
  </div>
export default Historique