import React from 'react'
import MyList from '../components/myList'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import RadioButton from '../components/RadioButton'

const Home = () =>
  <div>
    <TextField
        id="input-with-icon-textfield"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    <RadioButton/>
    <MyList/>
  </div>
export default Home
