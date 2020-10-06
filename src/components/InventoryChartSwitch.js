import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {  makeStyles, withStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    font: {
        fontFamily: '"Orbitron", sans-serif',
        color: '#DFB17B',
        whiteSpace: 'wrap',
        scrollable: true
      },
}));

export default function SwitchLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Diamonds"
        className={classes.font}
      />
      <FormControlLabel control={<Switch />} label="Sapphires" className={classes.font} />
      <FormControlLabel control={<Switch />} label="Emeralds" className={classes.font} />
      <FormControlLabel control={<Switch />} label="Rubys" className={classes.font} />
      <FormControlLabel control={<Switch checked />} label="Ducats" className={classes.font} />
    </FormGroup>
  );
}
