import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Countdown from "react-countdown";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 100,
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "transparent",
  },
}));

export default function WelcomeCard() {
  const classes = useStyles();

  // Random component
  const Completionist = () => <img src="https://i.imgur.com/8e2rVV9.png"></img>;

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
      <center>
    <img src="https://i.imgur.com/8e2rVV9.png"></img>
    <Typography color="textSecondary" gutterBottom variant="h4" component="h4" className={classes.font}>
                <font color="#dd9933">
                EtherChest Ecosystem
                </font>
    </Typography>
    </center>
    <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="right">
                <font color="#F7F0F0">
                Powered by <a href="https://www.coindesk.com/research/reports/ethereum-2-0-how-it-works-and-why-it-matters" target="_blank">
                Ethereum 2.0</a> and <a href="https://peakd.com/@etherchest" target="_blank">Hive</a> Blockchain
                </font>
    </Typography>
    <hr/>
    <br/>
    <center>
    <img src="https://i.imgur.com/cIottjD.png"></img>
    <Typography color="textSecondary" gutterBottom variant="h5" component="h5" className={classes.font}>
                <font color="#F7F0F0">
                November 11, 2020!
                </font>
    </Typography>
    </center>
    </Paper>
    <hr/>
    </Grid>
    </Grid>
    </div>
  );
}