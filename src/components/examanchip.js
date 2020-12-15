import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default function Chips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const nb = getRandomInt(3)

  console.log(nb)

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

if (nb === 0)
  return (
    <div className={classes.root}>
      <Chip
        label="radio Genou"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
    </div>
  );
    else if (nb > 0)
      return (    <div className={classes.root}>
        <Chip
          label="radio Genou"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
          <Chip
          label="Echo genou"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
      </div>
    );

}