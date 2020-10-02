import React, {useState, useContext, useEffect} from "react";
import { StateContext } from "./App";
import Chip from '@material-ui/core/Chip';
import LockOpen from '@material-ui/icons/LockOpen';
import Avatar from '@material-ui/core/Avatar';
//import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { EtherchestAPI } from "./service/EtherchestAPI.js";
import api from './service/SteemConnectAPI';

const access_token = localStorage.getItem("sc_token");

/*function rand() {
  return Math.round(Math.random() * 20) - 10;
}*/

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const handleClick = () => {
  window.location = '/login';
};

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#000000',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
font: {
  fontFamily: '"Orbitron", sans-serif',
},
paper: {
  position: 'absolute',
  width: 'auto',
  maxHeight: 'auto',
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
},
}));

export const AppInlineProfile = () => {
  const etherchestApi = new EtherchestAPI();
  const classes = useStyles();
  const {username} = useContext(StateContext);
  const [validatedTo, setValidatedTo] = useState();

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    etherchestApi.steemUserExists(username).then(username => {
      if (username) {
        setValidatedTo(username);
      } else {
        setValidatedTo();
      }
    });
  }, [username]);

  if (!username) {
    return (
      <div className="profile">
        <Tooltip title="Please Sign In to Begin" placement="left">
      <Chip
        icon={<LockOpen />}
        color="primary"
        label= "Not signed in"
        onClick={handleClick}
        className={classes.font}
      />
      </Tooltip>
      <br/>
    </div>
    );
  } else {
  return (
    <div className="profile">
      <Tooltip title="Signed In" placement="bottom">
      <Chip
        icon={<Avatar className={classes.avatar} disabled={true}>
        {validatedTo && (
        <div>
          <img
          alt="Hive Avatar"
          src={`https://images.hive.blog/u/${validatedTo}/avatar/small`}
          />
          </div>
          )}
        </Avatar>}
        label= {username}
        color="primary"
        className={classes.font}
      />
        </Tooltip>
    </div>
  );
  }
};
