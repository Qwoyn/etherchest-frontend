import React, {useState, useContext, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {StateContext} from "../App";
import useSteemKeychain from "../hooks/useSteemKeychain";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { EtherchestAPI } from "../service/EtherchestAPI";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://etherchest.com">
        Etherchest.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '85vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/user/alesnesetril/1600x900)', // main carousel
    // backgroundImage: 'url(https://i.imgur.com/vZ7ShWv.png)', // twiztedmonkey
    // backgroundImage: 'url(https://i.imgur.com/GkgOq4F.png)', // shirt sale
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    alt: 'https://source.unsplash.com/user/alesnesetril/1600x900',
    width: '100%',
    /*command: () => {
      window.open('https://www.twiztedmonkey.com', '_blank');
    }*/
  },
  paper: {
    margin: theme.spacing(1, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#ffffff',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    fontFamily: '"Jua", sans-serif',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
}));

export const RegisterPage = ({history}) => {
  const etherchestApi = new EtherchestAPI();
  const [username, setUsername] = useState("");
  const {steemConnectAPI, login} = useContext(StateContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isDesktop = window.innerWidth < 790;

  const registered = error => {
    if (error) {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(true);
    }
  };

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

  const handleSubmit = () => {
    if (username) {
      setIsSubmitting(true);

      const custom_json_id = "etherchest_register";
      const custom_JSON = JSON.stringify({username: username});

      steemConnectAPI.customJson(
        [],
        [username], 
        custom_json_id,
        custom_JSON,
        registered
      );
    }
  };

    const classes = useStyles();

    return (
    <Grid container component="main" className={classes.root}>
    <Grid item xs={false} sm={4} md={7} className={classes.image}>
    </Grid>
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <div className={classes.paper}>
      <center>
      <img
        alt="etherchest Banner"
        src={`https://i.imgur.com/TJP9RZ0.png`}
        />
        <Typography variant="h4" className={classes.font}>
          Etherchest Ecosystem
        </Typography>
        <Typography variant="paragraph" className={classes.font}>
          Please enter your Hive Username to Register
        </Typography>
      </center>
      
    </div>
      <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
        {validatedTo && (
        <div>
          <img
          alt="HIVE Avatar"
          src={`https://images.hive.blog/u/${validatedTo}/avatar/small`}
          />
          </div>
          )}
        </Avatar>
        <form className={classes.form} validate>
            
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Hive Account"
            value={username}
            autoFocus
            onChange={e => setUsername(e.target.value)}
            className={classes.font}
          />
          <Button
            fullWidth
            disabled={isSubmitting}
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            label={isSubmitting ? "Registering" : "Register"}
            className={classes.font}
          >
            Register
          </Button>
        <br/><br/>
	      <Button
          disabled={isSubmitting}
          label={isSubmitting ? "Registering" : "Register"}
          onClick={handleSubmit}
          />
          <Grid container>
            <Grid item>
              <Link href="https://signup.hive.io/" variant="body2" className={classes.font}>
                {"Don't have a Hive account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <center>
          <Box mt={5} className={classes.font}>
            <Copyright />
          </Box>
          </center>
        </form>
      </div>
    </Grid>
  </Grid>
  );

};

export default withRouter(RegisterPage);
