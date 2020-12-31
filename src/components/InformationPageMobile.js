import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    whiteSpace: 'wrap',
    color: theme.palette.text.secondary,
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
          alt=""
          src={ src }
          className="responsive-image__image" />
      </div>
    );
  }

export default function InformationPageMobile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
        <ResponsiveImage
                src="https://i.imgur.com/TlGrAgo.png"
                width={ 800 }
                height={ 600 } />
        </Grid>
        <Grid item xs>
            <Typography color="textSecondary" gutterBottom variant="h3" component="h3" className={classes.font} align="center">
                <font color="#dd9933">
                Multiple Earning Paths
                </font>
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Our Ecosystem is comprised of Validator Wallets which are used to stake on the Ethereum 2.0 Blockchain. We provide a way 
                for users with less than 32 ethereum to stake in on the Ethereum Blockchain within our Ecosystem and gain acess to three 
                different earning paths, non fungible tokens, decentralized exchanges and NFT markets.
                </font>
            </Typography>
            <br/>
            <br/>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Our erc20 tokens (Ducats) effeciently allow users to use their dust to mint tokens, use them to buy gems from users and 
                trade them on third-party exchanges. 
                </font>
            </Typography>
            <br/>
            <br/>
            <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font} align="center">
                <font color="#F7F0F0">
                Our erc721 tokens (Gems) provide proof-of-ownership and entry to block validation rewards within the EtherChest Ecosystem.
                </font>
            </Typography>
            <br/>
            <br/>
            <Button variant="outlined" color="secondary" href="https://peakd.com/introduceyourself/@etherchest/the-etherchest-com-ecosystem-finds-a-home-on-hive">
                Read our Whitepaper
            </Button>
        </Grid>
      </Grid>
      <br/>
    </div>
  );
}