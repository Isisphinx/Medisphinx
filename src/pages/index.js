import React from 'react'
import MyList from '../components/myList'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';


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
    <Button variant="outlined">All</Button>
    <Button variant="outlined">To do</Button>
    <MyList/>
  </div>
export default Home
