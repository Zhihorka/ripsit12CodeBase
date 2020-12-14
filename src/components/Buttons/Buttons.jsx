import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const GroupSizesColors = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
        <Button onClick={() => {
          props.setViewMode(0);
          props.setSorted(0);
        }}>Список учеников</Button>
        <Button  onClick={() => {
          props.setViewMode(1);
          props.setSorted(0);
        }}>Список книг</Button>
      </ButtonGroup>
    </div>
  );
}

export default GroupSizesColors;