import React from 'react';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginLeft: theme.spacing(1),
  },
}));

export default function CustomizedSwitches() {
  const classes = useStyles();
    const [state, setState] = React.useState({
      checkedC: true,
    })
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

    return (<div className={classes.root}>
            all
            <Switch checked={state.checkedC} onChange={handleChange} name="checkedC" />
            to do
        </div>
    )
}