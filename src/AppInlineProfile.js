import React, {useState, useContext, useEffect} from "react";
import { StateContext } from "./App";
import Chip from '@material-ui/core/Chip';
import { Lock } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';
//import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { EtherchestAPI } from "./service/EtherchestAPI.js";

const access_token = localStorage.getItem("sc_token");

const handleClick = () => {
  window.location = '/login';
};

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

  useEffect(() => {
    etherchestApi.hiveUserExists(username).then(username => {
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
        icon={<Lock />}
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
      <Chip
        color="primary"
        label= "Bal: 0 Hive"
        className={classes.font}
      />
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
