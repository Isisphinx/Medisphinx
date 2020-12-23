import React from 'react'
import TextField from '@material-ui/core/TextField'
import MyPatientNameList from './myPatientNameList'

const MyPatientName = () => {


    return (<div> 
        <TextField id='name-field' label='prénom'/>
        <TextField id='lastname-field' label='nom'/>
        <MyPatientNameList/>
    </div>)
}

export default MyPatientName