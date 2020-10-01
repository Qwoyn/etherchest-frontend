import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { FarmIcon, FarmingIcon, gemIcon } from './Icons';
import { GerminateIconBlack } from './Icons';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 250,
    background: "#ffffff",
    fontFamily: '"Orbitron", sans-serif',
  },
  media: {
    height: 140,
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
});

// The use of React.forwardRef will no longer be required for react-router-dom v6.
// See https://github.com/ReactTraining/react-router/issues/6056
const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Box boxShadow={12}>
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/TlGrAgo.png"
          title="EtherChest Ecosystem"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.font}>
            <u>Gem Market</u>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
          Find all of our available <a href="https://cointelegraph.com/explained/non-fungible-tokens-explained" target="_blank">non-fungible tokens (NFTs)</a> available in our Ecosystem in one convenient location.
          </Typography>
        </CardContent>
      <CardActions>
      <Link component={Link1} to="/market/gems">
        <IconButton color="primary" aria-label="Visit Market">
        
      </IconButton>Diamond
        </Link>
        <Link component={Link1} to="/market/gems">
        <IconButton color="primary" aria-label="Visit Market">
      
      </IconButton>Sapphire
        </Link>
        <Link component={Link1} to="/market/gems">
        <IconButton color="primary" aria-label="Visit Market">
     
      </IconButton>Emerald
        </Link>
        <Link component={Link1} to="/market/gems">
        <IconButton color="primary" aria-label="Visit Market">
        
      </IconButton>Ruby
        </Link>
      </CardActions>
    </Card>
    </Box>
  );
}