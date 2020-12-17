import React from 'react'
import MyList from '../components/myList'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment'

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
    <MyList />
  </div>
)
export default Home
