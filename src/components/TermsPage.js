import React from "react";
import {withRouter} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
    color: "#DFB17B",
    fontFamily: '"Orbitron", sans-serif',
  }
}));

export const TermsPage = () => {
	const classes = useStyles();
	
    return (
      <div>
          <Paper className={classes.paper}>
          <Typography color="textSecondary" gutterBottom variant="body1" component="body1" className={classes.font}>
          Etherchest is an application that utilizes the Hive blockchain network enabling users to own, transfer, and trade unique digital collectibles, which can then be visualized on a website or mobile application that the user can interact with (the “App”). Using the App, users can view their collectibles and acquire non-fungible tokens, which grant users a stake in Ethereum 2.0 Validators. ETHERCHEST LLC. d/b/a EtherChest.com("Etherchest.com", "we", or "us") is making the App available to you. Before you use the App or the Site, however, you will need to review these Terms of Use and any terms and conditions incorporated herein by reference (collectively, these “Terms").
          PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP OR THE SITE. THESE TERMS GOVERN YOUR USE OF THE APP, THE SITE, AND ANY PURCHASES YOU MAKE, UNLESS WE HAVE EXECUTED A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE. WE ARE ONLY WILLING TO MAKE THE APP AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS. BY USING THE APP AND/OR THE SITE, OR ANY PART OF EACH, YOU ARE CONFIRMING YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS. IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’S BEHALF, IN WHICH CASE “YOU” WILL MEAN THAT ENTITY. IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE UNWILLING TO MAKE THE APP OR THE SITE AVAILABLE TO YOU. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE APP OR THE SITE.
          KEY DEFINITIONS
<br/>
“Gems” means the digital collectible we offer.
<br/>
“Smart Contracts” means the computer code executed in response to transactions published on the Hive blockchain that generates a consistent and verifiable result.
<br/>
“ETHERCHEST, LLC. d/b/a EtherChest.com” means the State of Oregon Corporation that owns the EtherChest App and Site.
<br/>
<u>The App</u>
<br/>
The App must be used through a supported web browser on either a desktop or mobile device. Third party tools and services may be required in order to engage in transactions using cryptocurrencies.
Transactions that take place on the App are managed and confirmed via the Hive blockchain. You understand that your Hive public address will be made publicly visible whenever you engage in a transaction on the App.
We neither own nor control the Hive network, or any other third party site, product, or service that you might access, visit, or use for the purpose of enabling you to use the various features of the App. We will not be liable for the acts or omissions of any such third parties, nor will we be liable for any damage that you may suffer as a result of your transactions or any other interaction with any such third parties.
You must provide accurate and complete registration information when you create an account for the App. By creating an account, you agree to provide accurate, current and complete account information about yourself, and to maintain and promptly update as necessary your account information. You are responsible for the security of your account and your cryptocurrency wallet (and other Hive wallets and accounts). If you become aware of any unauthorized use of your password or of your account with us, you agree to notify us immediately at sales@Etherchest.com.
Fees and Payment
<br/>
If you elect to purchase, trade, or interact with gems on the App, or with or from other users via the App, any financial transactions you engage in will be conducted solely through the Hive network. We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions. You agree we have no liability to you or to any third party for any claims or damages that may arise as a result of any transactions that you engage in via the App or any other transactions that you conduct via the Hive or other blockchain networks.
Hive requires Resource Credits for every transaction that occurs on the Hive network. This means that you will need to ensure that you maintain a sufficient Resource Credit balance in your account in order to transact via the App.
As between us, you will be solely responsible to pay any and all sales, use, value-added and other taxes, duties, and assessments (except taxes on our net income) now or hereafter claimed or imposed by any governmental authority (collectively, “Taxes”) associated with your use of the App (including, without limitation, any Taxes that may become payable as the result of your ownership, transfer, or acquisition of your Etherchest Gems). Except for income taxes levied on Etherchest, you: (i) will pay or reimburse us for all national, federal, state, local or other taxes and assessments of any jurisdiction, including value added taxes and taxes as required by international tax treaties, customs or other import or export taxes, and amounts levied in lieu thereof based on charges set, services performed or payments made hereunder, as are now or hereafter may be imposed under the authority of any national, state, local or any other taxing jurisdiction; and (ii) shall not be entitled to deduct the amount of any such taxes, duties or assessments from payments made to us pursuant to these Terms.
Ownership; 
<br/>
Restrictions
<br/>
You acknowledge and agree that, unless otherwise stated, we (or, as applicable, our licensors) own all legal right, title and interest in and to all elements of the App, and all intellectual property rights therein. The visual interfaces, graphics (including, without limitation, all art and drawings associated with the), design, systems, methods, information, computer code, software, services, “look and feel”, organization, compilation of the content, code, data, and all other elements of the App (collectively, the “Etherchest Materials”) are owned by Etherchest, and are protected by copyright, trade dress, patent, and trademark laws, international conventions, other relevant intellectual property and proprietary rights, and applicable laws. All Etherchest Materials are the copyrighted property of Etherchest or its licensors, and all trademarks, service marks, and trade names contained in the Etherchest Materials are proprietary to Etherchest or its licensors. Except as expressly set forth herein, your use of the App does not grant you ownership of or any other rights with respect to any content, code, data, or other materials that you may access on or through the App. We reserve all rights in and to the Etherchest Materials not expressly granted to you in the Terms. For the sake of clarity, you understand and agree: (i) that your “purchase” of a Gem or other item, whether via the App or otherwise, does not give you any rights or licenses in or to the Etherchest Materials (including, without limitation, our copyright in and to the art and drawings associated with that Gem or the associated Gems unlocked through it) other than those expressly contained in these Terms; and (ii) that you do not have the right to reproduce, distribute, or otherwise commercialize any elements of the Etherchest Materials (including, without limitation, our copyright in and to the art and drawings associated with that Gem or Card) in any way without our prior written consent in each case, which consent we may withhold in our sole and absolute discretion.
You may choose to submit comments, bug reports, ideas or other feedback about the App, including without limitation about how to improve the App (collectively, “Feedback”). By submitting any Feedback, you agree that we are free to use such Feedback at our discretion and without additional compensation to you, and to disclose such Feedback to third parties (whether on a non-confidential basis, or otherwise). You hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license under all rights necessary for us to incorporate and use your Feedback for any purpose.
You agree that you are responsible for your own conduct while accessing or using the App, and for any consequences thereof. You agree to use the App only for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations. By way of example, and not as a limitation, you may not, and may not allow any third party to: (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable content; (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature; (iii) impersonate another person (via the use of an email address or otherwise); (iv) upload, post, transmit or otherwise make available through the App any content that infringes the intellectual proprietary rights of any party; (v) use the App to violate the legal rights (such as rights of privacy and publicity) of others; (vi) engage in, promote, or encourage illegal activity (including, without limitation, money laundering); (vii) interfere with other users’ enjoyment of the App; (viii) exploit the App for any unauthorized commercial purpose; (ix) modify, adapt, translate, or reverse engineer any portion of the App; (x) remove any copyright, trademark or other proprietary rights notices contained in or on the App or any part of it; (xi) reformat or frame any portion of the App; (xii) display any content on the App that contains any hate-related or violent content or contains any other material, products or services that violate or encourage conduct that would violate any criminal laws, any other applicable laws, or any third party rights; (xiii) use any robot, spider, site search/retrieval application, or other device to retrieve or index any portion of the App or the content posted on the App, or to collect information about its users for any unauthorized purpose; (xiv) create user accounts by automated means or under false or fraudulent pretenses; or (xv) access or use the App for the purpose of creating a product or service that is competitive with any of our products or services.
<br/>
Termination
<br/>
You may terminate these Terms at any time by canceling your account on the App and discontinuing your access to and use of the App. You will not receive any refunds if you cancel your account, or otherwise terminate these Terms. You agree that we, in our sole discretion and for any or no reason, may terminate these Terms and suspend and/or terminate your account(s) for the App. You agree that any suspension or termination of your access to the App may be without prior notice, and that we will not be liable to you or to any third party for any such suspension or termination. If we terminate these Terms or suspend or terminate your access to or use of the App due to your breach of these Terms or any suspected fraudulent, abusive, or illegal activity, then termination of these Terms will be in addition to any other remedies we may have at law or in equity. Upon any termination or expiration of these Terms, whether by you or us, you may no longer have access to information that you have posted on the App or that is related to your account, and you acknowledge that we will have no obligation to maintain any such information in our databases or to forward any such information to you or to any third party.
<br/>
Disclaimers
<br/>
YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE APP IS AT YOUR SOLE RISK, AND THAT THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE APP AND ANY PART OF IT (INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY. WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE APP WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE APP WILL BE ACCURATE, (III) THE APP OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE APP ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR (IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE APP WILL BE SECURE. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.
YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.
WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE HIVE NETWORK OR AN ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (A) USER ERROR, SUCH AS FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS OR OTHER TRANSACTIONS; (B) SERVER FAILURE OR DATA LOSS; (C) CORRUPTED WALLET FILES; (D) UNAUTHORIZED ACCESS OR ACTIVITIES BY THIRD PARTIES, INCLUDING BUT NOT LIMITED TO THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE APP, HIVE NETWORK, OR AN ELECTRONIC WALLET.
Etherchest Gems AND GemS ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE HIVE NETWORK. ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR THROUGH OUR CODE, AND ALL TRANSACTIONS ARE RECORDED ON THE DECENTRALIZED LEDGER WITHIN THE HIVE PLATFORM. FOR CLARITY, WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES OR PROMISES WITH RESPECT TO THE FUNCTIONALITY OF THE HIVE BLOCKCHAIN AND/OR THE EXECUTION OF SMART CONTRACTS AND/OR TRANSACTIONS.
Etherchest IS NOT RESPONSIBLE FOR LOSSES DUE TO BLOCKCHAINS OR ANY OTHER FEATURES OF THE HIVE NETWORK OR AN ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE HIVE NETWORK, INCLUDING FORKS, TECHNICAL NODE ISSUES, OR ANY OTHER ISSUES HAVING FUND LOSSES AS A RESULT.
<br/>
Limitation of Liability
<br/>
YOU UNDERSTAND AND AGREE THAT WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS (WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF (OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE APP, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF (A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR (B) $100.
YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE APP AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN, WHICH REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN THE PARTIES AND FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN US. WE WOULD NOT BE ABLE TO PROVIDE THE APP TO YOU WITHOUT THESE LIMITATIONS.
YOU ACKNOWLEDGE AND AGREE THAT YOU DO NOT RESIDE IN REGION THAT EXPLICITLY BANS THE USE OF LOOT BOXES IN GAMES IN ACCORDANCE WITH GAMBLING LAWS.
SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, AND SOME JURISDICTIONS ALSO LIMIT DISCLAIMERS OR LIMITATIONS OF LIABILITY FOR PERSONAL INJURY FROM CONSUMER PRODUCTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO PERSONAL INJURY CLAIMS.
<br/>
Assumption of Risk
<br/>
You accept and acknowledge each of the following:
The prices of blockchain assets are extremely volatile. Fluctuations in the price of other digital assets could materially and adversely affect the value of your Etherchest Gems or other items, which may also be subject to significant price volatility. We cannot guarantee that any purchasers of Etherchest Gems or other items will not lose money.
You are solely responsible for determining what, if any, taxes apply to your Etherchest-related transactions. Etherchest is not responsible for determining the taxes that apply to your transactions on the App, the Site, or any blockchain.
The App does not store, send, or receive Etherchest Gems. This is because Etherchest Gems and items exist only by virtue of the ownership record maintained on the App’s supporting blockchain in the Hive network. Any transfer of Etherchest Gems occurs within the supporting blockchain in the Hive network, and not on the App.
There are risks associated with using an Internet-based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet. You accept and acknowledge that Etherchest will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Hive network, however caused.
A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the development of the Etherchest ecosystem, and therefore the potential utility or value of Etherchest Gems or other items.
The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the Etherchest ecosystem, and therefore the potential utility or value of Gems and other items.
Upgrades by Hive to the Hive platform, a hard fork in the Hive platform, or a change in how transactions are confirmed on the Hive platform may have unintended, adverse effects on all applications using the Hive platform, including the Etherchest ecosystem.
Indemnification
<br/>
You agree to hold harmless and indemnify Etherchest and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage (actual and consequential) of any kind or nature, suit, judgment, litigation cost, and attorneys’ fees arising out of or in any way related to (i) your breach of these Terms, (ii) your misuse of the App, (iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the App, or (iv) your breach of our Privacy Policy. You agree that Etherchest will have control of the defense or settlement of any such claims.
External Sites
<br/>
The App may include hyperlinks to other websites or resources (collectively, “External Sites”), which are provided solely as a convenience to our users. We have no control over any External Sites. You acknowledge and agree that we are not responsible for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites. Furthermore, you acknowledge and agree that we are not liable for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites.
Changes to the App
<br/>
We may revise and update these Terms of Use from time to time in our sole discretion. When we make changes, we will make the updated Terms available on the App and update the “Last Updated” date at the beginning of these Terms accordingly, which apply to all access to and use of the App and Website thereafter. Please check these Terms periodically for changes. Any changes to the Terms will apply on the date that they are made, and your continued access to or use of the App after the Terms have been updated will constitute your binding acceptance of the updates. If you do not agree to any revised Terms, you may not access or use the App.
Children.
<br/>
You affirm that you are over the age of 13, as the App is not intended for children under 13. IF YOU ARE 13 OR OLDER BUT UNDER THE AGE OF 18, OR THE LEGAL AGE OF MAJORITY WHERE YOU RESIDE IF THAT JURISDICTION HAS AN OLDER AGE OF MAJORITY, THEN YOU AGREE TO REVIEW THESE TERMS WITH YOUR PARENT OR GUARDIAN TO MAKE SURE THAT BOTH YOU AND YOUR PARENT OR GUARDIAN UNDERSTAND AND AGREE TO THESE TERMS. YOU AGREE TO HAVE YOUR PARENT OR GUARDIAN REVIEW AND ACCEPT THESE TERMS ON YOUR BEHALF. IF YOU ARE A PARENT OR GUARDIAN AGREEING TO THE TERMS FOR THE BENEFIT OF A CHILD OVER 13, THEN YOU AGREE TO AND ACCEPT FULL RESPONSIBILITY FOR THAT CHILD’S USE OF THE APP, INCLUDING ALL FINANCIAL CHARGES AND LEGAL LIABILITY THAT HE OR SHE MAY INCUR.
<br/>
Privacy Policy
<br/>
Our Privacy Policy describes the ways we collect, use, store and disclose your personal information, and is hereby incorporated by this reference into these Terms. You agree to the collection, use, storage, and disclosure of your data in accordance with our Privacy Policy.
Dispute Resolution; 
<br/>
Arbitration
<br/>
PLEASE READ THIS SECTION CAREFULLY. IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
EXCEPT FOR DISPUTES THAT QUALIFY FOR SMALL CLAIMS COURT, ALL DISPUTES ARISING OUT OF OR RELATED TO THESE TERMS OF USE OR ANY ASPECT OF THE RELATIONSHIP BETWEEN YOU AND US, WHETHER BASED IN CONTRACT, TORT, STATUTE, FRAUD, MISREPRESENTATION, OR ANY OTHER LEGAL THEORY, WILL BE RESOLVED THROUGH FINAL AND BINDING ARBITRATION BEFORE A NEUTRAL ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY, AND YOU AGREE THAT Etherchest AND YOU ARE EACH WAIVING THE RIGHT TO SUE IN COURT AND TO HAVE A TRIAL BY A JURY. YOU AGREE THAT ANY ARBITRATION WILL TAKE PLACE ON AN INDIVIDUAL BASIS; CLASS ARBITRATIONS AND CLASS ACTIONS ARE NOT PERMITTED AND YOU ARE AGREEING TO GIVE UP THE ABILITY TO PARTICIPATE IN A CLASS ACTION.
The laws of the State of Oregon and applicable United States federal law, including the Federal Arbitration Action as specified herein, shall govern these Terms of Services.
Except for those disputes that shall be resolved in arbitration or in small claims court pursuant to this section, each party agrees to submit to the personal and exclusive jurisdiction of the courts located in the State of Oregon, USA provided that any claims or disputes shall be subject to the arbitration provisions set forth below.
Except for claims for injunctive or equitable relief or claims regarding intellectual property rights (which may be brought, in an individual capacity only, and not on a class-wide or representative basis, in the courts specified above), any dispute between you and Etherchest related in any way to, or arising in any way from, our Privacy Policy or these Terms of Services (“Dispute”) shall be finally settled on an individual, non-representative basis in binding arbitration in accordance with the American Arbitration Association (“AAA”) rules for arbitration of consumer-related disputes (available from AAA on its website at www.adr.org), as modiﬁed by this Agreement or in accordance with rules on which we may mutually agree; provided, however, that to the extent a Dispute is within the scope of a small claims court’s jurisdiction, either you or Etherchest may commence an action in small claims court, in the county (or equivalent) of your most recent physical address, to resolve the Dispute.
Any arbitration will be conducted by a single, neutral arbitrator and shall take place in Portland, Oregon, USA. The arbitrator may award any relief that a court of competent jurisdiction could award, including attorneys’ fees when authorized by law. The arbitral decision may be enforced in any court of competent jurisdiction. You hereby agree that this Agreement evidences a transaction involving interstate commerce, and therefore, the Federal Arbitration Act (“FAA”) applies to these Terms of Service, including the agreement to arbitrate set forth above. We each agree that the FAA, and not state law, shall govern whether a Dispute is subject to arbitration.
The arbitrator will conduct hearings, if any, by teleconference or videoconference, rather than by personal appearances, unless the arbitrator determines upon request by you or by us that an in-person hearing is appropriate. Any in-person appearances will be held at a location which is reasonably convenient to both parties with due consideration of their ability to travel and other pertinent circumstances. If the parties are unable to agree on a location, such determination should be made by AAA or by the arbitrator. The arbitrator’s decision will follow the terms of these Terms of Use and will be final and binding. The arbitrator will have authority to award temporary, interim, or permanent injunctive relief or relief providing for specific performance of these Terms of Use, but only to the extent necessary to provide relief warranted by the individual claim before the arbitrator. The award rendered by the arbitrator may be confirmed and enforced in any court having jurisdiction thereof. Notwithstanding any of the foregoing, nothing in these Terms of Use will preclude you from bringing issues to the attention of federal, state, or local agencies and, if the law allows, they can seek relief against us for you.
Waiver and Severability
<br/>
No waiver by the Company of any term or condition set out in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of the Company to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision. If any provision of these Terms of Use is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use will continue in full force and effect.
<br/>
Content Standards
<br/>
These content standards apply to any and all contributions and use by you to the App or Site. Your use and contributions must in their entirety comply with all applicable federal, state, local, and international laws and regulations. Without limiting the foregoing, You must not:
Provide any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable.
Promote sexually explicit or pornographic material, violence, or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age.
Infringe any patent, trademark, trade secret, copyright, or other intellectual property or other rights of any other person.
Violate the legal rights (including the rights of publicity and privacy) of others or contain any material that could give rise to any civil or criminal liability under applicable laws or regulations or that otherwise may be in conflict with these Terms of Use and our Privacy Policy.
Be likely to deceive any person.
<br/>
Promote any illegal activity, or advocate, promote, or assist any unlawful act.
Impersonate any person, or misrepresent your identity or affiliation with any person or organization.
Involve commercial activities or sales, such as contests, sweepstakes, and other sales promotions, barter, or advertising.
Give the impression that they emanate from or are endorsed by us or any other person or entity, if this is not the case.
<br/>
Not an Investment Company
<br/>
The Company is not to be registered as an “investment company” under the Investment Company Act of 1940, as amended or under equivalent laws of any other jurisdiction.
Defamation
<br/>
You agree you will not disparage or criticize the Company or its Affiliates, or their respective businesses, management, directors, business practices, or equity holders (the “Company Entities”) and that you will not otherwise do or say anything that could disrupt the good morale, or otherwise harm the interests or reputations, of the Company Entities and we agree we will not publicly disparage or criticize you.
Refunds
<br/>
Due to the irrevocable nature of the blockchain, and our lack of control over user assets, we are unable to offer refunds on any purchases.
<br/>
General
<br/>
These Terms constitute the entire legal agreement between you and Etherchest, govern your access to and use of the App, and completely replace any prior or contemporaneous agreements between the parties related to your access to or use of the App, whether oral or written. There are no third party beneficiaries to these Terms. The parties are independent contractors, and nothing in these Terms create any agency, partnership, or joint venture. The language in these Terms will be interpreted as to its fair meaning, and not strictly for or against any party. You may not assign any or your rights or obligations under these Terms, whether by operation of law or otherwise, without our prior written consent. We may assign our rights and obligations under these Terms in our sole discretion to an affiliate, or in connection with an acquisition, sale or merger. Should any part of these Terms be held invalid or unenforceable, that portion shall be construed consistent with applicable law and the remaining portions will remain in full force and effect. Our failure to enforce any provision of these Terms will not be deemed a waiver of such provision, nor of the right to enforce such provision. These Terms will be governed by and construed in accordance with the laws of the State of Oregon, and the federal laws of the United States of America applicable therein, excluding its conflicts of law rules and principles. We will not be liable for any failure or delayed performance of our obligations that result from any condition beyond our reasonable control, including, but not limited to, governmental action, acts of terrorism, earthquake, fire, flood, acts of God, labor conditions, power failures, Internet disturbances, or acts or omissions of third parties. You agree that we may provide you with notices (including, without limitation those regarding changes to these Terms) by email, regular mail, or postings on the App. By providing us with your email address, you consent to our using the email address to send you any notices required by law in lieu of communication by postal mail.
      </Typography>
      </Paper>
	  </div>
    );
};

export default withRouter(TermsPage);