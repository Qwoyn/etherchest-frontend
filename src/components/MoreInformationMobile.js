import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    whiteSpace: 'wrap',
    color: theme.palette.text.secondary,
    backgroundColor: "transparent",
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
}));

function ResponsiveImage( { src, width, height } ) {
    return (
      <div
        style={ { 
          width,
        } }
        className="responsive-image">
        <div style={ {
            paddingBottom: ( height / width * 100 ) + '%'
          } } />
        <img
          src={ src }
          className="responsive-image__image" />
      </div>
    );
  }

export default function MoreInformationMobile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <br/>
      <br/>
      <Grid container spacing={3}>
        <Paper className={classes.paper}>
        <Grid item xs>
        <Typography color="textSecondary" gutterBottom variant="h3" component="h3" className={classes.font} align="left">
                <font color="#dd9933">
                EtherChest Staking
                </font>
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Not everyone has 32 ethereum to start staking but etherchest.com has made it easy for every to get in on ethereum staking 
                by allowing a minimum stake of 0.1 ETH.
                </font>
            </Typography>
            <br/>
            <br/>
            <center>
            <Typography color="textSecondary" gutterBottom variant="h4" component="h4" className={classes.font} align="center">
                <font color="#F7F0F0">
                - - -
                </font>
            </Typography>
            </center>
            <br/>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Sell your stake to others using our custom EtherChest nfts.  You can use any nft market such as opensea.io!
                </font>
            </Typography>
            <br/>
            <center>
            <Typography color="textSecondary" gutterBottom variant="h4" component="h4" className={classes.font} align="center">
                <font color="#F7F0F0">
                - - -
                </font>
            </Typography>
            </center>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                We keep your crypto secure and backed up so you can stake with confidence.
                </font>
            </Typography>
        </Grid>
        <Grid item xs>
            <br/>
            <br/>
            <br/>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Staking is a fairly new concept. <a href="https://cointelegraph.com/explained/ethereum-20-staking-explained#:~:text=1.-,What%20is%20Ethereum%202.0%20staking%3F,blockchain%20in%20return%20for%20rewards." target="_blank">Click Here</a> to learn more about ethereum staking and keep up to date with any latest 
                information from the Core Dev team.
                </font>
            </Typography>
            <center>
            <Typography color="textSecondary" gutterBottom variant="h4" component="h4" className={classes.font} align="center">
                <font color="#F7F0F0">
                - - -
                </font>
            </Typography>
            </center>
            <br/>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Owning staking rights in one of our chests comes with benefits such as voting on community projects.
                </font>
            </Typography>
            <center>
            <Typography color="textSecondary" gutterBottom variant="h4" component="h4" className={classes.font} align="center">
                <font color="#F7F0F0">
                - - -
                </font>
            </Typography>
            </center>
            <br/>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                We have a unique opportunity to help the community by giving back our earnings and sponsoring dapp development on Ethereum.  
                When you stake with us you are also funding the future of blockchain technology.
                </font>
            </Typography>
            <br/>
            <br/>
        </Grid>
        </Paper>
      </Grid>
      <br/>
    </div>
  );
}