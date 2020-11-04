import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ParallaxBanner } from 'react-scroll-parallax';
import Countdown from "react-countdown";

const useStyles = makeStyles({
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
});

export default function WelcomeCard() {
  const classes = useStyles();

  // Random component
  const Completionist = () => <img src="https://i.imgur.com/8e2rVV9.png"></img>;

  return (
    <div>
      <center>
    <img src="https://i.imgur.com/8e2rVV9.png"></img>
    <Typography color="textSecondary" gutterBottom variant="h1" component="h1" className={classes.font}>
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
    <img src="https://i.imgur.com/igeZjtO.png"></img>
    <Typography color="textSecondary" gutterBottom variant="h1" component="h1" className={classes.font}>
                <font color="#F7F0F0">
                November 11, 2020!
                </font>
    </Typography>
    </center>
    <hr/>
    </div>
  );
}