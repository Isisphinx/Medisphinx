import React from 'react'
import TextField from '@material-ui/core/TextField'
import MyPatientNameList from './myPatientNameList'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    textfield: {
      marginLeft: theme.spacing(10),
    },
    button: {
      marginLeft: theme.spacing(4)
    },
  }));

const MyPatientName = () => {
    const classes = useStyles();

    return (<div> 
        <TextField className={classes.textfield} id='name-field' label='prénom'/>
        <TextField className={classes.textfield} id='lastname-field' label='nom'/>
        <IconButton className={classes.button}>
            <AddIcon/>
        </IconButton>
        <MyPatientNameList/>
    </div>)
}

export default MyPatientName