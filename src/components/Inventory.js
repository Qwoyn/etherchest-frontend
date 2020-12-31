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
import { LandIcon, CrystalIcon, DucatIcon } from './Icons';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import FooterPage from './FooterPage';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";



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
  root: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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
  paperDucat: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#000000",
  },
  paperProfile: {
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#00002e",
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
  card: {
    backgroundColor: "#001E1E",
    whiteSpace: 'wrap',
    scrollable: true,
    fontFamily: '"Orbitron", sans-serif',
  },
  media: {
    height: 250,
  },
  mediaDucat: {
    width: "auto",
    height: 450,
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
  fontGold: {
    fontFamily: '"Orbitron", sans-serif',
    color: '#ebb734',
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
  }
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

export default function Inventory() {
  const {username} = useContext(StateContext);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

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

  const isDesktop = window.innerWidth < 1000;

  const loadData = async (ourUsername) => {
    
    const urlAPI = 'https://etherchest-backend.herokuapp.com/u/'+ ourUsername;
    
    const response = await fetch(urlAPI);
    const data = await response.json();

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

    var totalEthValue = diamondValue + sapphireValue + emeraldValue + rubyValue + (totalDucats * 0.00001);
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

  const handleSubmitDiamond = async e => {
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
          <Tab label="Market" icon={<LandIcon />} {...a11yProps(2)} className={classes.font} disabled />
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
        <br/><br/>
        <Typography variant="caption" className={classes.font}>
        By clicking purchase you agree to our <a href="https://www.etherchest.com/terms">terms of service</a>
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
          placeholder="Choose Diamond..."
        />     
        <br/>
        </CardActions>
        <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
        <Button
        className="p-button-rounded p-button-success"
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitDiamond}
      />
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
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
        <br/><br/>
        <Typography variant="caption" className={classes.font}>
        By clicking purchase you agree to our <a href="https://www.etherchest.com/terms">terms of service</a>
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
          placeholder="Choose Sapphire..."
        />
        <br/>
        </CardActions>
        <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
        <Button
        className="p-button-rounded p-button-success"
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitSapphire}
      />
        </Grid>
        <Grid item xs={4}></Grid>
        </Grid>
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
        <br/><br/>
        <Typography variant="caption" className={classes.font}>
        By clicking purchase you agree to our <a href="https://www.etherchest.com/terms">terms of service</a>
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
        <br/>
        </CardActions>
        <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
        <Button
        className="p-button-rounded p-button-success"
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitEmerald}
      />
      </Grid>
      <Grid item xs={4}></Grid>
      </Grid>
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
        <br/><br/>
        <Typography variant="caption" className={classes.font}>
        By clicking purchase you agree to our <a href="https://www.etherchest.com/terms">terms of service</a>
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
        <br/>  
        </CardActions>
        <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={6}>
        <Button
        className="p-button-rounded p-button-success"
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmitRuby}
      />
      </Grid>
      <Grid item xs={4}></Grid>
      </Grid>
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
        </Grid>
        <Grid item xs={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root} variant="outlined">
            <CardContent>
        <Grid container spacing={1}>
        <Grid item xs={12}>
                <Paper className={classes.paperDucat}>
                    <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.fontGold} color="textSecondary" gutterBottom>
                Total Ducats
                </Typography>
                <CardMedia
                className={classes.mediaDucat}
                image="/assets/layout/images/Ducat_Card.png"
                title="1 Ducat = 0.00001 ETH"
                />
                 <br/>
                <Typography variant="h2" component="h2" className={classes.fontGold}>
                {ruby}
                </Typography>
                </CardContent>
                <Typography className={classes.fontGold} color="textSecondary" gutterBottom>
                Value: {totalDucats * 0.00001} ETH
                </Typography>
                </Card>
            </Paper>
            </Grid>
          
        <Grid item xs={12}>
          <hr/>
        </Grid>
        
        <Grid item xs>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Total ETH:
        </Typography>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
        {totalEthValues}
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
                Total Ducats
            </Typography>
            <Typography className={classes.font} color="textSecondary" gutterBottom>
          {totalDucats}
        </Typography>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paperProfile}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Status
        </Typography>
        <Typography className={classes.font} color="textSecondary" gutterBottom>
          VIP
        </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
        <hr/>
        </Grid> 
      </Grid>
      
        </CardContent>
        </Card>
        
        </Paper>
        </Grid>
        <Grid item xs>
        
      </Grid>
    </Grid>
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
        <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
              <Avatar alt="Remy Sharp" src="https://i.imgur.com/TJP9RZ0.png" className={classes.large} />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography className={classes.font} color="textSecondary" gutterBottom>
          Please use a desktop browser to interact with Etherchest!
        </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <hr/>
        </Grid>
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
    <br/>
    <hr/>
    <br/>
    <FooterPage />
  </div>
);
}}