import React, {useContext, useState, useEffect} from "react";
import {StateContext} from "../App";
import {  makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import _ from "lodash";
import {sign} from "hivesigner";
import useHiveKeychain from "../hooks/useHiveKeychain";
import { EtherchestAPI, DiamondNames, SapphireNames, EmeraldNames, RubyNames } from "../service/EtherchestAPI";
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { FarmIcon, SubdivisionIcon, gemSvgIcon, DnaIcon, BongIcon, GiftIcon, LandIcon, CrystalIcon, DucatIcon } from './Icons';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import InventoryChart from './InventoryChart';
import CardActions from '@material-ui/core/CardActions';
import InventoryNav from "./InventoryNav";
import InventoryChartSwitch from './InventoryChartSwitch'; 
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import { Redirect } from 'react-router';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Fab from '@material-ui/core/Fab';
import DialogTitle from '@material-ui/core/DialogTitle';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  flex: {
    flexGrow: 1,
  },
  rootField: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
  rootCard: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  small: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  background: {
    backgroundColor: "#000000"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#000000",
  },
  paperPurple: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#220050",
  },
  paperProfile: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#00002e",
  },
  paperLeft: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#073232",
  },
  paperRight: {
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#073232",
  },
  paperBadge: {
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#3D1289",
  },
  button: {
    margin: theme.spacing(1),
  },
  paperBlack: {
    padding: theme.spacing(1),
    textAlign: 'right',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#000000",
  },
  margin: {
    margin: theme.spacing(2),
    whiteSpace: 'wrap',
    scrollable: true
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
  card: {
    backgroundColor: "#001E1E",
    whiteSpace: 'wrap',
    scrollable: true,
    fontFamily: '"Orbitron", sans-serif',
  },
  media: {
    height: 250,
  },
  paperFarming: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#515e90",
    height: "240px"
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#DFB17B',
    whiteSpace: 'wrap',
    scrollable: true
  },
  fontBox: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#DFB17B',
    whiteSpace: 'wrap',
    maxWidth: "225px",
    scrollable: true
  },
  fontPurchase: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#ffffff',
    backgroundColor: '#000000',
    whiteSpace: 'wrap',
    textAlign: 'left',
    scrollable: true
  },
  fontGreen: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#068D0C',
    whiteSpace: 'wrap',
    scrollable: true
  },
  fontRed: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#9b111e',
    whiteSpace: 'wrap',
    scrollable: true
  }, 
  fontBlue: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#0068D2',
    whiteSpace: 'wrap',
    scrollable: true
  },
  fontWhite: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#ffffff',
    whiteSpace: 'wrap',
    scrollable: true
  },
  fontRight: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#DFB17B',
    whiteSpace: 'wrap',
    textAlign: 'right',
    scrollable: true
  },
  extension: {
    backgroundColor: "DFB17B",
    whiteSpace: 'wrap',
    height: "47px"
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

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#000000',
    color: '#DFB17B',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

export default function Inventory() {
  const {username} = useContext(StateContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const [registerModal, setRegisterModal] = useState(false);

  const [diamond, setDiamonds] = useState([0]);
  const [sapphire, setSapphires] = useState([0]);
  const [emerald, setEmeralds] = useState([0]);
  const [ruby, setRubys] = useState([0]);
  const [diamondValues, setDiamondValues] = useState([0]);
  const [sapphireValues, setSapphireValues] = useState([0]);
  const [emeraldValues, setEmeraldValues] = useState([0]);
  const [rubyValues, setRubyValues] = useState([0]);
  const [totalGems, setTotalGems] = useState([0]);
  const [totalDucats, setTotalDucats] = useState([0]);
  const [totalEthValues, setTotalEthValues] = useState([0]);
  const [registered, setRegistered] = useState(true)

  const [diamondPrice, setDiamondPrices] = useState([0]);
  const [sapphirePrice, setSapphirePrices] = useState([0]);
  const [emeraldPrice, setEmeraldPrices] = useState([0]);
  const [rubyPrice, setRubyPrices] = useState([0]);

  const [diamonds, setDiamond] = useState();
  const [sapphires, setSapphire] = useState();
  const [emeralds, setEmerald] = useState();
  const [rubys, setRuby] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasHiveKeychain = useHiveKeychain();

  const [open, setOpen] = React.useState(true);

  const isDesktop = window.innerWidth < 1000;

  const etherchestApi = new EtherchestAPI();

  const loadData = async (ourUsername) => {
    
    const urlAPI = 'https://etherchest-backend.herokuapp.com/u/'+ourUsername;
    
    const response = await fetch(urlAPI);
    const data = await response.json();
    
    setRegistered(data.diamond);

    if (data.diamond) {
    setDiamonds(data.diamond.length);
    setSapphires(data.sapphire.length);
    setEmeralds(data.emerald.length);
    setRubys(data.ruby.length);

    var diamondValue = data.diamond.length * 1;
    var sapphireValue = data.sapphire.length * .5;
    var emeraldValue = data.emerald.length * .25;
    var rubyValue = data.ruby.length * .1;
    setDiamondValues(diamondValue);
    setSapphireValues(sapphireValue);
    setEmeraldValues(emeraldValue);
    setRubyValues(rubyValue);

    var totalEthValue = diamondValue + sapphireValue + emeraldValue + rubyValue;
    setTotalEthValues(totalEthValue);

    var gemTotal = data.diamond.length + data.sapphire.length + data.emerald.length + data.ruby.length;
    setTotalGems(gemTotal);

    setTotalDucats(data.ducats);
    } 
  }

  useEffect(() => {
    loadData(username);
  }, [username]);

  const loadPriceData = async () => {
    
    const urlAPI = 'https://etherchest-backend.herokuapp.com/';
    
    const response = await fetch(urlAPI);
    const pricedata = await response.json();

    var diamondPrice = pricedata.stats.prices.listed.gems.diamond / 1000;
    var sapphirePrice = pricedata.stats.prices.listed.gems.sapphire / 1000;
    var emeraldPrice = pricedata.stats.prices.listed.gems.emerald / 1000;
    var rubyPrice = pricedata.stats.prices.listed.gems.ruby / 1000;
    setDiamondPrices(diamondPrice);
    setSapphirePrices(sapphirePrice);
    setEmeraldPrices(emeraldPrice);
    setRubyPrices(rubyPrice);
  }

  useEffect(() => {
    loadPriceData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (diamonds && username) {
      setIsSubmitting(true);

      const memo = `${diamonds.name} ${diamonds.name}`;
      const to = "etherchest";
      const amount = diamondPrice.toFixed(3).toString();
      const currency = "HIVE";

      if (hasHiveKeychain()) {
        const hive_keychain = window.hive_keychain;
        try {
          await new Promise((resolve, reject) => {
            return hive_keychain.requestTransfer(
              username,
              to,
              amount,
              memo,
              currency,
              response => {
                if (response.success) {
                  resolve(response);
                } else {
                  reject();
                }
              },
              true
            );
          });
          setIsSubmitting(false);
          setDiamond();
        } catch {
          setIsSubmitting(false);
        }
      } else {
        window.location.href = sign(
          "transfer",
          {
            to,
            from: username,
            amount: `${amount} ${currency}`,
            memo
          },
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}/dashboard`
            : "http://localhost:3000/dashboard"
        );
      }
    }
  };

  const handleSubmitSapphire = async e => {
    e.preventDefault();
    if (sapphires && username) {
      setIsSubmitting(true);

      const memo = `${sapphires.name} ${sapphires.name}`;
      const to = "etherchest";
      const amount = sapphirePrice.toFixed(3).toString();
      const currency = "HIVE";

      if (hasHiveKeychain()) {
        const hive_keychain = window.hive_keychain;
        try {
          await new Promise((resolve, reject) => {
            return hive_keychain.requestTransfer(
              username,
              to,
              amount,
              memo,
              currency,
              response => {
                if (response.success) {
                  resolve(response);
                } else {
                  reject();
                }
              },
              true
            );
          });
          setIsSubmitting(false);
          setSapphire();
        } catch {
          setIsSubmitting(false);
        }
      } else {
        window.location.href = sign(
          "transfer",
          {
            to,
            from: username,
            amount: `${amount} ${currency}`,
            memo
          },
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}/dashboard`
            : "http://localhost:3000/dashboard"
        );
      }
    }
  };

  const handleSubmitEmerald = async e => {
    e.preventDefault();
    if (emeralds && username) {
      setIsSubmitting(true);

      const memo = `${emeralds.name} ${emeralds.name}`;
      const to = "etherchest";
      const amount = emeraldPrice.toFixed(3).toString();
      const currency = "HIVE";

      if (hasHiveKeychain()) {
        const hive_keychain = window.hive_keychain;
        try {
          await new Promise((resolve, reject) => {
            return hive_keychain.requestTransfer(
              username,
              to,
              amount,
              memo,
              currency,
              response => {
                if (response.success) {
                  resolve(response);
                } else {
                  reject();
                }
              },
              true
            );
          });
          setIsSubmitting(false);
          setEmerald();
        } catch {
          setIsSubmitting(false);
        }
      } else {
        window.location.href = sign(
          "transfer",
          {
            to,
            from: username,
            amount: `${amount} ${currency}`,
            memo
          },
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}/dashboard`
            : "http://localhost:3000/dashboard"
        );
      }
    }
  };

  const handleSubmitRuby= async e => {
    e.preventDefault();
    if (rubys && username) {
      setIsSubmitting(true);

      const memo = `${rubys.name} ${rubys.name}`;
      const to = "etherchest";
      const amount = rubyPrice.toFixed(3).toString();
      const currency = "HIVE";

      if (hasHiveKeychain()) {
        const hive_keychain = window.hive_keychain;
        try {
          await new Promise((resolve, reject) => {
            return hive_keychain.requestTransfer(
              username,
              to,
              amount,
              memo,
              currency,
              response => {
                if (response.success) {
                  resolve(response);
                } else {
                  reject();
                }
              },
              true
            );
          });
          setIsSubmitting(false);
          setRuby();
        } catch {
          setIsSubmitting(false);
        }
      } else {
        window.location.href = sign(
          "transfer",
          {
            to,
            from: username,
            amount: `${amount} ${currency}`,
            memo
          },
          process.env.REACT_APP_URL
            ? `${process.env.REACT_APP_URL}/`
            : "https://localhost:3000/"
        );
      }
    }
  };

  let buttonLabel = "Purchase";
  if (isSubmitting) buttonLabel = "Purchasing";
  if (!username) buttonLabel = "Please Sign in";


  if (!isDesktop) {
  return (
  <div className={classes.flex}>
      <Grid container spacing={1}>
          <Grid item xs={8}>

            <Grid container spacing={1}>
                
                <Grid item xs={3}>
                   <Paper className={classes.paper}>
                      <Card className={classes.root} variant="outlined">
                        <CardContent>
                          <Typography className={classes.fontWhite} color="textSecondary" gutterBottom>
                              Total Diamonds
                          </Typography>
                 
                        <CardMedia
                        className={classes.media}
                        image="/assets/layout/images/Diamond.jpg"
                        title="Diamond Gem 1 ETH"
                        />
                        <br/>
                          <Typography variant="h2" component="h2" className={classes.fontWhite}>
                          {diamond}
                          </Typography>
                        </CardContent>
                          <Typography className={classes.fontWhite} color="textSecondary" gutterBottom>
                            Value: {diamondValues} ETH
                          </Typography>
                      </Card>
                   </Paper>
                  </Grid>
                
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <Card className={classes.root} variant="outlined">
                  <CardContent>
                    <Typography className={classes.fontBlue} color="textSecondary" gutterBottom>
                    Total Sapphires
                    </Typography>
                  <CardMedia
                  className={classes.media}
                  image="/assets/layout/images/Sapphire.jpg"
                  title="Sapphire Gem 0.5 ETH"
                  />
                <br/>
                <Typography variant="h2" component="h2" className={classes.fontBlue}>
                {sapphire}
                </Typography>
                </CardContent>
                <Typography className={classes.fontBlue} color="textSecondary" gutterBottom>
                Value: {sapphireValues} ETH
                    </Typography>
                 </Card>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <Card className={classes.root} variant="outlined">
              <CardContent>
                <Typography className={classes.fontGreen} color="textSecondary" gutterBottom>
                Total Emeralds
                </Typography>
                <CardMedia
                className={classes.media}
                image="/assets/layout/images/Emerald.jpg"
                title="Emerald Gem 0.25 ETH"
                />
                <br/>
                <Typography variant="h2" component="h2" className={classes.fontGreen}>
                {emerald}
                </Typography>
                </CardContent>
                <Typography className={classes.fontGreen} color="textSecondary" gutterBottom>
                Value: {emeraldValues} ETH
                </Typography>
                </Card>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.fontRed} color="textSecondary" gutterBottom>
                Total Rubys
                </Typography>
                <CardMedia
                className={classes.media}
                image="/assets/layout/images/Ruby.jpg"
                title="Ruby Gem 0.1 ETH"
                />
                 <br/>
                <Typography variant="h2" component="h2" className={classes.fontRed}>
                {ruby}
                </Typography>
                </CardContent>
                <Typography className={classes.fontRed} color="textSecondary" gutterBottom>
                Value: {rubyValues} ETH
                </Typography>
                </Card>
            </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <ResponsiveImage
                src="https://i.imgur.com/GAbKp9R.png"
                width={ 1000 }
                height={ 210 } />
              </Paper>
            </Grid>
        
          <Grid item xs={12}>
            <Paper>
            <InventoryChart />
            </Paper>
            <Paper className={classes.paper}>
          <InventoryChartSwitch />
          </Paper>
          </Grid>
            
        </Grid>
            
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
        <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.large} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
        <Paper className={classes.paper}>
     
        </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Grid item xs={12}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
                Rank
            </Typography>
            <Typography className={classes.font} color="textSecondary" gutterBottom>
          Captain
        </Typography>
          </Paper>
        </Grid>
        <hr/>
        <Typography className={classes.font} color="textSecondary">
        <b>Total ETH: {totalEthValues}</b>
        </Typography>
          </Paper>
          
        </Grid>
        <Grid item xs={8}>
          </Grid>

        

        <Grid item xs={12}>
          <hr/>
        </Grid>
        

        <Grid item xs={4}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Total Gold
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Total Gems
        </Typography>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
          {totalGems}
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
                Total Ducats
            </Typography>
            <Typography className={classes.font} color="textSecondary" gutterBottom>
          {totalDucats}
        </Typography>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          <u>Guild</u>
        </Typography>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
          Etherchest <font color="green">(Merchants)</font>
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Staked Gems
        </Typography>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
          {totalGems}
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
                Rank
            </Typography>
            <Typography className={classes.font} color="textSecondary" gutterBottom>
          Captain
        </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
        <hr/>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography className={classes.font} variant="h2" color="textSecondary" gutterBottom>
                Badges
            </Typography>
          
          </Paper>
        </Grid>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paperBadge}>
          <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.small} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperBadge}>
              <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.small} />
          </Paper>
        </Grid>
        </Grid>
        </Paper>
      </Grid>
      
        </CardContent>
        </Card>
        
        </Paper>
        </Grid>
        <Grid item xs>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="error"
          aria-label="Action Tabs"
          className={classes.background}
          centered
        >
          <Tab label="Gems" icon={<CrystalIcon />} {...a11yProps(0)} className={classes.font} disabled/>
          <Tab label="Ducats" icon={<DucatIcon />} {...a11yProps(1)} className={classes.font} disabled />
          <Tab label="Guild" icon={<LandIcon />} {...a11yProps(2)} className={classes.font} disabled />
        </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
    <TabPanel value={value} index={0} dir={theme.direction}>
    <Grid container spacing={1}>
    <Grid item xs={3}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="body1" className={classes.font}>
         Diamonds:
        </Typography>
        <hr/>
        <Typography variant="body1" className={classes.font}>
         1 ETH <br/>
         <font color="red">({diamondPrice} HIVE)</font>
        </Typography>
        </CardContent>
        <CardActions>
        <Dropdown className="p-dropdown"
          disabled={isSubmitting || !username}
          optionLabel="name"
          value={diamonds}
          id="name"
          options={Object.keys(DiamondNames).map(key => ({
            id: key,
            name: DiamondNames[key]
          }))}
          style={{width: "100%"}}
          onChange={e => {
            setDiamond(e.value);
          }}
          placeholder="Choose a diamond..."
        />     
        <br/><br/>   
        <Button
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmit}
      />
      <br/>
        <br/>
        </CardActions>
        <br/>
        <br/>
        </Card>
    </Grid>

    <Grid item xs={3}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="body1" className={classes.font}>
        Sapphires:
        </Typography>
        <hr/>
        <Typography variant="body1" className={classes.font}>
        0.5 ETH 
         <br/>
        <font color="red">({sapphirePrice} HIVE)</font>
        </Typography>
        </CardContent>
        <CardActions>
        <Dropdown className="p-dropdown"
          disabled={isSubmitting || !username}
          optionLabel="name"
          value={sapphires}
          id="name"
          options={Object.keys(SapphireNames).map(key => ({
            id: key,
            name: SapphireNames[key]
          }))}
          style={{width: "100%"}}
          onChange={e => {
            setSapphire(e.value);
          }}
          placeholder="Choose a Sapphire..."
        />     
        <br/><br/>   
        <Button
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitSapphire}
      />
      <br/>
        <br/>
        </CardActions>
        <br/>
        <br/>
        </Card>
    </Grid>

    <Grid item xs={3}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="body1" className={classes.font}>
        Emeralds:
        </Typography>
        <hr/>
        <Typography variant="body1" className={classes.font}>
        0.25 ETH 
         <br/>
        <font color="red">({emeraldPrice} HIVE)</font>
        </Typography>
        </CardContent>
        <CardActions>
        <Dropdown className="p-dropdown"
          disabled={isSubmitting || !username}
          optionLabel="name"
          value={emeralds}
          id="name"
          options={Object.keys(EmeraldNames).map(key => ({
            id: key,
            name: EmeraldNames[key]
          }))}
          style={{width: "100%"}}
          onChange={e => {
            setEmerald(e.value);
          }}
          placeholder="Choose Emerald..."
        />     
        <br/><br/>   
        <Button
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitEmerald}
      />
      <br/>
        <br/>
        </CardActions>
        <br/>
        <br/>
        </Card>
    </Grid>

    <Grid item xs={3}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="body1" className={classes.font}>
        Rubys:
        </Typography>
        <hr/>
        <Typography variant="body1" className={classes.font}>
        0.1 ETH 
         <br/>
        <font color="red">({rubyPrice} HIVE)</font>
        </Typography>
        </CardContent>
        <CardActions>
        <Dropdown className="p-dropdown"
          disabled={isSubmitting || !username}
          optionLabel="name"
          value={rubys}
          id="name"
          options={Object.keys(RubyNames).map(key => ({
            id: key,
            name: RubyNames[key]
          }))}
          style={{width: "100%"}}
          onChange={e => {
            setRuby(e.value);
          }}
          placeholder="Choose Ruby..."
        />     
        <br/><br/>   
        <Button
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitRuby}
      />
      <br/>
        <br/>
        </CardActions>
        <br/>
        <br/>
        </Card>
    </Grid>
    </Grid>
    </TabPanel>

    <Paper className={classes.paper}>
    <TabPanel value={value} index={1} dir={theme.direction}>
    <Grid container spacing={2}>
        <Grid item xs={6}>
        <Card className={classes.root} variant="outlined">
      <CardContent>
          <Paper className={classes.fontPurchase}>
        <Typography variant="h5" component="h5" className={classes.font}>
         Purchase Hive Ducats
        </Typography>
        <br/>
        <Paper className={classes.fontBox}> 
        <TextField id="filled-basic" label="Enter Amount" variant="outlined" color="secondary" className={classes.font}/>
        </Paper>
        <br/><br/>
        
        <br/>
        <br/>
        </Paper>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
          <Paper className={classes.paperBlack}>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
          <u>Ducat Balance</u>
        </Typography>
        <Typography variant="h5" component="h2" className={classes.font}>
          0
        </Typography>
        </Paper>
      </CardContent>
    </Card>
    <ResponsiveImage
      src="https://i.imgur.com/GAbKp9R.png"
       width={ 1000 }
       height={ 210 } />
    </Grid>
    <Grid item xs={6}>
    <hr/>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Paper className={classes.fontPurchase}>
        <Typography variant="h5" component="h5" className={classes.font}>
         Convert HIVE Ducats to ETH Ducats
        </Typography>
        <br/>
        <Paper className={classes.fontBox}> 
        <TextField id="filled-basic" label="Enter Amount" variant="filled" color="primary" className={classes.font}/>
        <TextField id="filled-basic" label="Enter Eth Address" variant="filled" color="secondary" className={classes.font}/>
        </Paper>
        <br/><br/>
      
        <br/>
        <br/>
        </Paper>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
        <hr/>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Paper className={classes.fontPurchase}>
        <Typography variant="h5" component="h5" className={classes.font}>
         Send Ducats to Hive User
        </Typography>
        <br/><br/>
        <Paper className={classes.fontBox}> 
        <TextField id="filled-basic" label="Enter Amount" variant="filled" color="primary" className={classes.font}/>
        <TextField id="filled-basic" label="Enter Hive User" variant="filled" color="secondary" className={classes.font}/>
        </Paper>
        <br/><br/>
        
        <br/>
        <br/>
        </Paper>
      </CardContent>
    </Card>
    </Grid>
   </Grid>
    </TabPanel>
    </Paper>

    <TabPanel value={value} index={2} dir={theme.direction}>
    <Grid container spacing={2}>
    <Grid item xs={6}>
        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
         Purchase Hive Ducats
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Ducat Balance
        </Typography>
        <Typography variant="h5" component="h2">
          0
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          Send Ducats
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          Convert Hive Ducats to Ethereum Ducats
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    <Grid item xs={6}>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          Send Ducats
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Grid>
    </TabPanel>
      </SwipeableViews>
      </Grid>
    </Grid>
    
    {registered === undefined &&
        <Dialog
        open={open}
        aria-labelledby="Please Register and wait 2 minutes for the transaction to propogate on HIVE"
        aria-describedby="Please Register and wait 2 minutes for the transaction to propogate on HIVE"
      >
        <DialogTitle id="alert-dialog-title">{"Please register to view your dashboard then wait 2 minutes for the transaction to propogate on HIVE"}</DialogTitle>
        <DialogContent>
        <Fab
                    variant="outline" 
                    color="primary"
                    href="/register"
                    className={classes.button}
                  >Register
                  </Fab>
        </DialogContent>
      </Dialog>
      }
    </div>
  );
    } else {
      return (
        <div className={classes.flex}>
      <Grid container spacing={1}>
          <Grid item>
          <Paper className={classes.paper}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
        <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.large} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          <b>{username}</b>
        </Typography>
        <hr/>
        <Typography className={classes.font} color="textSecondary">
        <b>Total ETH: {totalEthValues}</b>
        </Typography>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Total Gems
        </Typography>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
          {totalGems}
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
                Total Ducats
            </Typography>
            <Typography className={classes.font} color="textSecondary" gutterBottom>
          {totalDucats}
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <hr/>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
                Badges
            </Typography>
            <hr/>
          </Paper>
        </Grid>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paperBadge}>
          <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.large} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paperBadge}>
              <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.large} />
          </Paper>
        </Grid>
        </Grid>
        </Paper>
      </Grid>
        </CardContent>
        </Card>
        </Paper>
        </Grid>

        <Paper className={classes.paper}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
            <Grid item xs>
                <Paper className={classes.paper}>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  <u>Inventory</u>
                  </Typography>
                </Paper>
                </Grid>
              <Grid container spacing={1}>
                
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  <u>Diamonds:</u>
                  </Typography>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  {diamond}
                  </Typography>
                  <hr/>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  Value: {diamondValues} ETH
                  </Typography>
                </Paper>
                  <hr/>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  <u>Emeralds:</u>
                  </Typography>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  {emerald}
                  </Typography>
                  <hr/>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  Value: {emeraldValues} ETH
                  </Typography>
                  </Paper>
                  <hr/>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  <u>Sapphires: </u>
                  </Typography>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  {sapphire}
                  </Typography>
                  <hr/>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  Value: {sapphireValues} ETH
                  </Typography>
                  </Paper>
                  <hr/>
                </Grid>
                <Grid item xs={6}>
                <Paper className={classes.paper}>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  <u>Rubys:</u>
                  </Typography>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  {ruby}
                  </Typography>
                  <hr/>
                  <Typography className={classes.font} color="textSecondary" gutterBottom>
                  Value: {rubyValues} ETH
                  </Typography>
                  </Paper>
                  <hr/>
                </Grid>
             </Grid>
           </CardContent>
          </Card>
        </Paper>
    </Grid>

    {registered === undefined &&
        <Dialog
        open={open}
        aria-labelledby="Please Register"
        aria-describedby="Please Register"
      >
        <DialogTitle id="alert-dialog-title">{"Please register to view your dashboard"}</DialogTitle>
        <DialogContent>
        <Fab
                    variant="outline" 
                    color="primary"
                    href="/register"
                    className={classes.button}
                  >Register
                  </Fab>
        </DialogContent>
      </Dialog>
      }
  </div>
);
}}