import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

const RadioButtonsGroup = () => {
  const [value, setValue] = React.useState('female')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <FormControl component='fieldset'>
      <RadioGroup name='To Do' value={value} onChange={handleChange}>
        <FormControlLabel value='All' control={<Radio />} label='All' />
        <FormControlLabel value='To Do' control={<Radio />} label='To Do' />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonsGroup
