import React, { useContext, useState, useEffect } from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { EtherchestAPI } from "../service/EtherchestAPI";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Avatar from '@material-ui/core/Avatar';
import {StateContext} from "../App";
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(3),
    backgroundColor: "#095938",
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  flex: {
    flexGrow: 1,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
    // Promote the list into its own layer on Chrome. This costs memory but helps to keep FPS high.
    transform: 'translateZ(0)',
  },
  icon: {
    color: 'white',
  },
  text: {
    color: 'white',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffffff'
  }
}));

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#000000",
    color: '#DFB17B',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function Trending() {
  const classes = useStyles();
  const {username} = useContext(StateContext);
  const [trending, setTrending] = useState();
  const {steemConnectAPI} = useContext(StateContext);

  useEffect(() => {
    const etherchestAPI = new EtherchestAPI();
    etherchestAPI.getTrending().then(setTrending);
  }, []);

  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!username) {
    return (
    <Redirect to='/login'/>
    );
  } else if (trending) {
  return (
    <div className={classes.root}>
    <GridList cellHeight={250} spacing={1} className={classes.gridList}>
      {trending.map(post => {
        const images = JSON.parse(post.json_metadata).image;
        const voting = () => {
          const weight = 420;
          console.dir(username);
          steemConnectAPI.vote([username], post.author, post.permlink, weight);
        };
        return (
          <GridListTile key={post.post_id} cols={post.title ? 2 : 1} rows={post.title ? 2 : 1}>
            <img src={images && images.length > 0 ? images[0] : "https://i.imgur.com/8e2rVV9.png"} alt="EtherChest Logo" />
            <a href={"https://www.peakd.com/@" + post.author + "/" + post.permlink} target="_blank" rel="noopener noreferrer">
            <GridListTileBar
              title={post.title}
              titlePosition="top"
              subtitle={post.author}
              actionIcon={
                <IconButton aria-label={`star ${post.net_votes}`} className={classes.icon}>
                <Avatar className={classes.avatar}>
               <img
               alt="HIVE Avatar"
               src={`https://images.hive.blog/u/${post.author}/avatar/small`}
               />
               </Avatar>
                </IconButton>
              }
              actionPosition="left"
            />
            </a>
            <GridListTileBar
              title={"Pending Payout: " + post.pending_payout_value}
              titlePosition="bottom"
              
              actionIcon={
                <HtmlTooltip
                title={
                <React.Fragment>
                  <Typography color="error">Voting coming soon!</Typography>
                </React.Fragment>
                }
                placement="top"
                TransitionComponent={Zoom}
                >
                <IconButton aria-label={`star ${post.net_votes}`} className={classes.icon} onClick={voting}>
                  {post.active_votes.length}<FavoriteIcon />
                </IconButton>
                </HtmlTooltip>
              }
              actionPosition="left"
              
            />
          </GridListTile>)
      } )}
    </GridList>
   </div>
  ); 
    } else 
    return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="Connection Issue"
      aria-describedby="Connection Issue"
    >
      <DialogTitle id="alert-dialog-title">{"Connecting to the Hive Blockchain"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Please wait...
        </DialogContentText>
      </DialogContent>
    </Dialog>
    );
}