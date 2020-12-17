import React from 'react'
import MyHistorique from '../components/myHistorique'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'

const Historique = () =>
  <div>
    <TextField id="standard-basic" label={<SearchIcon/>} />
    <Button variant="outlined">Filtre 1</Button>
    <Button variant="outlined">Filtre 2</Button>
    <Button variant="outlined">Filtre 3</Button>
    <Button variant="outlined">+</Button>
    <MyHistorique />
  </div>
export default Historique