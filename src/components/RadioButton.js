import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);
  const [todo, settodo] = React.useState(false);

  return ( <div>
    <ToggleButton
        value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}>
      All
    </ToggleButton>
    <ToggleButton
            value="check"
            selected={todo}
            onChange={() => {
              settodo(!todo);
            }}>
        To Do
    </ToggleButton></div>
  )
}