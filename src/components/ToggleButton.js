import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function StandaloneToggleButton() {
    const [alignment, setAlignment] = React.useState('filter1')

    const handleAlignment = (event, newAlignment) => {
        if (newAlignment !== null) {
          setAlignment(newAlignment)
        }
      };

  return ( <ToggleButtonGroup
    value={alignment}
    exclusive
    onChange={handleAlignment}
  >
    <ToggleButton value="filter1">
        filter1
    </ToggleButton>
    <ToggleButton value="filter2">
        filter2
    </ToggleButton>
    <ToggleButton value="">
        filter3
    </ToggleButton>
  </ToggleButtonGroup>
  )
}