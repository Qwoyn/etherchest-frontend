import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Buygem from './Buygem';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: "#2e4272",
    fontFamily: '"Orbitron", sans-serif',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    fontFamily: '"Orbitron", sans-serif',
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
}));

export default function DiamondCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.font}
        avatar={
          <Avatar aria-label="diamond" className={classes.avatar}>
            D
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Genesis Diamond"
        subheader="Value: 1 ETH"
      />
      <CardMedia
        className={classes.media}
        image="https://i.imgur.com/fTtzi7P.png"
        title="Diamond"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
          The most valuable of Gems with the highest earning potential earn as much as 300 Ducats per day with this limited Gem.  
          Special Bonus included!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Buygem />
      </CardActions>
    </Card>
  );
}
