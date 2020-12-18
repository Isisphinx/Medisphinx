import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function CustomizedSwitches() {
    const [state, setState] = React.useState({
      checkedC: true,
    })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

    return (<div>
            <Switch checked={state.checkedC} onChange={handleChange} name="checkedC" />
        </div>
    )
}