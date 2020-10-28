import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { gemIcon } from './Icons';
import { LandIcon } from './Icons';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    background: "#ffffff",
    minWidth:250,
    fontFamily: '"Orbitron", sans-serif',
  },
  media: {
    height: 140,
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
});

const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);
const Link2 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export default function WalletCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/4yeIKds.png"
          title="Eth 2.0"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.font}>
            <a href="/dashboard">User Dashboard</a>
          </Typography>
          <font color="red">(Coming Soon)</font>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
            The portal to everything EtherChest. Visit your Wallet and view Gems, Ducat payouts and other information or check out your Guild stats!
          </Typography>
        </CardContent>
    </Card>
  );
}