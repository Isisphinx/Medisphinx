import React from 'react'
import MyList from '../components/myList'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Home = () =>
  <div>
    <TextField id="standard-basic" label="Standard" />
    <Button variant="outlined">All</Button>
    <Button variant="outlined">To do</Button>
    <MyList/>
  </div>
export default Home
