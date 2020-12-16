import React from 'react'
import MyList from '../components/myList'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

const Home = () =>
  <div>
    <TextField id="standard-basic" label={<SearchIcon/>} />
    <Button variant="outlined">All</Button>
    <Button variant="outlined">To do</Button>
    <MyList/>
  </div>
export default Home
