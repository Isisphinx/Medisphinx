import React from 'react'
import TextField from '@material-ui/core/TextField'

const MyPatientName = () => {


    return (<div> 
        <TextField id='name-field' label='prénom'/>
        <TextField id='lastname-field' label='nom'/>
    </div>)
}

export default MyPatientName