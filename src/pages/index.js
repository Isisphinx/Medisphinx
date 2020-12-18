import React from 'react'
import MyList from '../components/myList'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'
import MySwitch from '../components/mySwitch'

const Home = () => (
  <div>
    <TextField
      id='input-with-icon-textfield'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <MySwitch/>
    <MyList />
  </div>
)
export default Home
