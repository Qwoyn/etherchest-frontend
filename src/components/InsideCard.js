import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 360,
  },
  paper: {
    textAlign: 'center',
    whiteSpace: 'wrap',
    backgroundColor: "transparent",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <center>
    <Paper className={classes.paper}>
    <Box boxShadow={0}>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IuxTMRXLsNA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
    </Paper>
    </center>
    </div>
  );
}