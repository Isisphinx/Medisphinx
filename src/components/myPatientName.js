import React from 'react'
import TextField from '@material-ui/core/TextField'
import MyPatientNameList from './myPatientNameList'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    textfield: {
      marginLeft: theme.spacing(1),
    },
    button: {
      marginLeft: theme.spacing(1)
    },
  }));

const MyPatientName = ({handlenext}) => {
    const classes = useStyles();

    return (<div className={classes.div}>
      <Grid
      container
      justify="center"
      alignItems="center">
        <TextField className={classes.textfield} id='name-field' label='prénom'/>
        <TextField className={classes.textfield} id='lastname-field' label='nom'/>
        <IconButton className={classes.button}>
            <AddIcon/>
        </IconButton>
      </Grid>
      <MyPatientNameList handlenext={handlenext}/>
    </div>)
}

export default MyPatientName