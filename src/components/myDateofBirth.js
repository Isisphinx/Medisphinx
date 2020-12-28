import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const myDateofBirth = () => {
    return (
    <div>
        <Grid
        container
        justify="center"
        alignItems="center">
            <TextField
            id='date of birth'
            label='date de naissance'
            />
        </Grid>
    </div>
    )
}

export default myDateofBirth