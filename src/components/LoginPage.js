import React, {useState, useContext, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {StateContext} from "../App";
import useHiveKeychain from "../hooks/useHiveKeychain";
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
import { ReactComponent as MetaMask } from "./metamask.svg"

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
  separator: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    padding: '15px 0',

    '&::before, &::after': {
        content: '""',
        flex: 1,
        borderBottom: '1px solid #1212'
    },
    '&::before': {
      marginRight: '.25em'
    },
    '&::after': {
      marginLeft: '.25em'
    }
  }
}));

export const LoginPage = ({history}) => {
  const ethUtil = require('ethereumjs-util')
  const Eth = require('ethjs')
  const etherchestApi = new EtherchestAPI();

  const [username, setUsername] = useState("");
  const {steemConnectAPI, login} = useContext(StateContext);
  const [loggingIn, setLoggingIn] = useState(false);
  const hasHiveKeychain = useHiveKeychain();
  const isDesktop = window.innerWidth < 790;

  const keychainLoggedIn = (_, token) => {
    if (token) {
      steemConnectAPI.setAccessToken(token);
      steemConnectAPI
        .me()
        .then(res => {
          login(res.name);
          localStorage.setItem("sc_token", token);
          if (!isDesktop) {
          history.push("/");
        } else {
          history.push("/");
        }
        })
        .catch(e => {
          console.log(e);
          setUsername("");
          setLoggingIn(false);
        });
    } else {
      setUsername("");
      setLoggingIn(false);
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

  const Login = () => {
    setLoggingIn(true);
    steemConnectAPI.login({username}, keychainLoggedIn);
  };

  const LoginMetamask = (e) => {
    e.preventDefault()
    setLoggingIn(true);

    const text = "By signing this message you agree to all terms and conditions found at: https://www.etherchest.com/terms"
    const msg = ethUtil.bufferToHex(new Buffer.from(text, 'utf8'))
    const from = window.web3.eth.accounts[0]
    if (!from) return connectMetamask()

    // Now with Eth.js
    const eth = new Eth(window.web3.currentProvider)

    eth.personal_sign(msg, from)
      .then((signed) => {
        console.log('Signed!  Result is: ', signed)
        console.log('Recovering...')

        return eth.personal_ecRecover(msg, signed)
      })
      .then((recovered) => {
        setLoggingIn(false)
        if (recovered === from) {
          console.log('Ethjs recovered the message signer!')
        } else {
          console.log('Ethjs failed to recover the message signer!')
          console.dir({ recovered })
        }
      }).catch((e) => {
        setLoggingIn(false)
        console.log(e)
      })
  };


const connectMetamask = () => {
  if (typeof ethereum !== 'undefined') {
    window.ethereum.enable()
    .catch(console.error)
  }
}

  const loginLabelPrefix = loggingIn ? "Logging in with" : "Login with";
  const loginLabelSuffix = hasHiveKeychain()
    ? "Hive Keychain"
    : "Hivesigner";

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
            variant="contained"
            color="primary"
            onClick={Login}
            label={`${loginLabelPrefix} ${loginLabelSuffix}`}
            className={classes.font}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="https://signup.hive.io/" variant="body2" className={classes.font}>
                {"Don't have a Hive account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <div className={`${classes.separator} ${classes.font}`}>OR</div>
          <Button
            fullWidth
            variant="contained"
            onClick={LoginMetamask}
            className={classes.font}
            disabled={loggingIn}
          >
            <MetaMask width="32px" /> Login With MetaMask
          </Button>
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

export default withRouter(LoginPage);
