import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ParallaxBanner } from 'react-scroll-parallax';

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
});

export default function WelcomeCard() {
  const classes = useStyles();

  return (
    <div>
      <center>
    <img src="https://i.imgur.com/8e2rVV9.png"></img>
    <Typography color="textSecondary" gutterBottom variant="h1" component="h1" className={classes.font}>
                <font color="#F7F0F0">
                Etherchest Ecosystem
                </font>
    </Typography>
    </center>
    <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="right">
                <font color="#F7F0F0">
                Powered by <a href="https://www.coindesk.com/research/reports/ethereum-2-0-how-it-works-and-why-it-matters" target="_blank">Ethereum 2.0</a> and <a href="https://peakd.com/@etherchest" target="_blank">Hive</a>
                </font>
    </Typography>
    <hr/>
    
    </div>
  );
}