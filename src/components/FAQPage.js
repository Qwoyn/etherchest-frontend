import React from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: '#DFB17B',
  },
  background: {
    backgroundColor: '#154A4A',
  },
  text: {
    color: "#DFB17B",
    fontFamily: '"Orbitron", sans-serif',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "transparent",
  },
}));

export const FAQPage = () => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
  
	const handleChange = panel => (event, isExpanded) => {
	  setExpanded(isExpanded ? panel : false);
	};
  
    return (
      <div>
        <Paper className={classes.paper}>
      <font color="#DFB17B">
		  <h3><b>Etherchest is an independently developed Ethereum 2.0 staking service running on the HIVE blockchain. </b></h3></font>
      <font color="#DFB17B">
			<h3><b>The EtherChest team consists of three core members: Daniel Pittman, AJ Brockman and W. Moglia. Their 
			background experience includes Business Management, Ethereum Smart Contracts, HiveJS, Dlux VR, Node, Frontend and Backend api 
			design.</b></h3></font>
      <font color="#DFB17B">
			<h3><b>Designed to be an Ethereum staking service that implements fungible and non-fungible HIVE tokens on the blockchain, EtherChest intends to 
			be an affordable and easy way to Stake on Ethereum 2.0. The internal mechanics allow you to stake your HIVE in return for Ethereum staking 
			rewards. These returns are generated through transaction validation on the Ethereum 2.0 blockchain paid out to users using our fungible currency called Ducats. 
      This creates a micro-economy within the dApp that evolves and grows as the number of users grows.</b></h3>
      </font>
      <font color="#DFB17B">
			<h3><b>Our vision is to create the next generation of dApps powered by blockchain technologies. Not only to earn passive income but to 
			educate and enrich the community. Help us to continue creating quality independently developed software in the future.</b></h3>
			</font>
      <font color="#DFB17B">
      <h1><b>Frequently asked Questions</b></h1>
      </font>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><b>What is Etherchest?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
          The Etherchest.com Ecosystem provides easy, affordable access to get you involved with staking on ETH2. 
          Our Ecosystem is community driven, which aims to play an important role in supporting new projects, 
          stability inside the network, and validating transactions; a "triple fusion". 
          Etherchest.com is committed to growth for Ethereum's community and evolving future projects.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}><b>How do you earn from Ethereum staking with Etherchest?</b></Typography>   
		  </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
			EtherChest stakes Ethereum inside a number of Ethereum 2.0 validators on the ETH beacon chain.  Similar to a proof-of-work blockchain, 
      in proof-of-stake when transactions are verified by our validators the Ecosystem earns the block reward.  Rewards are then distributed
      Depending on the type and number of NFTs (Etherchest Gems) a user owns.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}><b>Where do I begin?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
		      After signing in head on over to the <a href="/">
          dashboard (coming Nov 11, 2020)</a> by following the link or clicking the "Dashboard" icon in the top left hand corner. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography className={classes.heading}><b>What should I do after I purchase my gems?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
			  Give the blockchain a minute or so to process the transaction and reload your Dashboard.  You will then see your Gems, Ducats and your earnings for the day.  
        Check back everyday to see your earnings which are updated every 24 hours.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}><b>Is there an advantage to owning Diamonds over Rubys and the others?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
			Yes, the size of your stake determines your payouts.  If you own a diamond which is valued at the equivalent of 1 Ethereum in HIVE earns more than the rest of the
      Gems.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}><b>Can I cash out my Gems and Ducats immediately?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
			Ethereum 2.0 is just beginning and in phase 0 all Ethereum is locked in the validators.  This includes the original amount staked and the rewards earned.
      Nobody can touch them, not even Etherchest.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
        >
          <Typography className={classes.heading}><b>What are the differences between gems?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
           Our Gems have their own value.  Diamonds are worth 1 ETH, Sapphires are worth 0.5 ETH, Emeralds are worth 0.25 ETH and Rubys are worth 0.1 ETH.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
	  <ExpansionPanel expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className={classes.background}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
        >
          <Typography className={classes.heading}><b>How many garden gems can I own?</b></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.text}>
          <Typography>
			You can own as many Gems as you would like and the more you own the more you earn.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Paper>
	  </div>
    );
};

export default withRouter(FAQPage);