import React from 'react'
import TextField from '@material-ui/core/TextField'
import MyPatientNameList from './myPatientNameList'
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';

const MyPatientName = () => {


    return (<div> 
        <TextField id='name-field' label='prénom'/>
        <TextField id='lastname-field' label='nom'/>
        <IconButton>
            <AddIcon/>
        </IconButton>
        <MyPatientNameList/>
    </div>)
}

export default MyPatientName