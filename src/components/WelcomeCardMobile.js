import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={classes.paper}>
      <center>
    <img src="https://i.imgur.com/8e2rVV9.png" alt="Etherchest Logo"></img>
    <Typography color="textSecondary" gutterBottom variant="h4" component="h4" className={classes.font}>
                <font color="#dd9933">
                EtherChest Ecosystem
                </font>
    </Typography>
    </center>
    <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="right">
                <font color="#F7F0F0">
                Powered by <a href="https://www.coindesk.com/research/reports/ethereum-2-0-how-it-works-and-why-it-matters" alt="Ethereum 2.0"target="_blank" rel="noopener noreferrer">
                Ethereum 2.0</a> and <a href="https://peakd.com/@etherchest" target="_blank" rel="noopener noreferrer">Hive</a> Blockchain
                </font>
    </Typography>
    <hr/>
    <br/>
    </Paper>
    </Grid>
    </Grid>
    </div>
  );
}