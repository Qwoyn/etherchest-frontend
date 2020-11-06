import React from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "transparent",
  },
  text: {
    color: "#DFB17B"
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
    color: "#DFB17B",
  }
}));

export const PrivacyPage = () => {
	const classes = useStyles();
	
    return (
      <div>
          <Paper className={classes.paper}>
          <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font}>
          Privacy Policy 
<br/>  
Protecting your private information is our priority. This Statement of Privacy applies to https://etherchest.com and ETHERCHEST LLC and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to ETHERCHEST LLC include https://etherchest.com and EtherChest. The EtherChest website is a Ethereum Staking Service site. By using the EtherChest website, you consent to the data practices described in this statement. 
  <br/>  
Collection of your Personal Information 
We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include: (a) registering for an account on our Site; (b) entering a sweepstakes or contest sponsored by us or one of our partners; (c) signing up for special offers from selected third parties; (d) sending us an email message; (e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site. To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future. 
  <br/>  
Sharing Information with Third Parties 
EtherChest does not sell, rent or lease its customer lists to third parties. 
  <br/>  
EtherChest may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to EtherChest, and they are required to maintain the confidentiality of your information. 
 <br/>   
EtherChest may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on EtherChest or the site; (b) protect and defend the rights or property of EtherChest; and/or (c) act under exigent circumstances to protect the personal safety of users of EtherChest, or the public. 
 <br/>   
Tracking User Behavior 
EtherChest may keep track of the websites and pages our users visit within EtherChest, in order to determine what EtherChest services are the most popular. This data is used to deliver customized content and advertising within EtherChest to customers whose behavior indicates that they are interested in a particular subject area. 
  <br/>  
Automatically Collected Information 
Information about your computer hardware and software may be automatically collected by EtherChest. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the EtherChest website. 
  <br/>  
Use of Cookies 
The EtherChest website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you. 
  <br/>  
One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize EtherChest pages, or register with EtherChest site or services, a cookie helps EtherChest to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same EtherChest website, the information you previously provided can be retrieved, so you can easily use the EtherChest features that you customized. 
  <br/>  
You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the EtherChest services or websites you visit. 
  <br/>  
Links 
This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information. 
  <br/>  
Security of your Personal Information 
EtherChest secures your personal information from unauthorized access, use, or disclosure. EtherChest uses the following methods for this purpose:  
 -	SSL Protocol 
  <br/>  
When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol. 
  <br/>  
We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed. 
  <br/>  
Right to Deletion 
Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will: 
•	Delete your personal information from our records; and 
•	Direct any service providers to delete your personal information from their records. 
  <br/>  
Please note that we may not be able to comply with requests to delete your personal information if it is necessary to: 
•	Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us; 
•	Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity; 
•	Debug to identify and repair errors that impair existing intended functionality; 
•	Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law; 
•	Comply with the California Electronic Communications Privacy Act; 
•	Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent; 
•	Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us; 
•	Comply with an existing legal obligation; or 
•	Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information. 
  <br/>  
Children Under Thirteen 
EtherChest does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website. 
  <br/>  
Changes to this Statement 
EtherChest reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our site, and/or by updating any privacy information on this page. Your continued use of the Site and/or Services available through this Site after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy. 
  <br/>  
Contact Information 
EtherChest welcomes your questions or comments regarding this Statement of Privacy. If you believe that EtherChest has not adhered to this Statement, please contact EtherChest at: 
  <br/>  
ETHERCHEST LLC 
<br/>  
Portland, Oregon 97203 
  <br/>  
Email Address: 
sales@etherchest.com 
  <br/>  
  
Effective as of November 05, 2020 
  
</Typography>
      </Paper>
	  </div>
    );
};

export default withRouter(PrivacyPage);