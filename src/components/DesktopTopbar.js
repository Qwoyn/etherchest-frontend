import React from 'react';
import Grid from '@material-ui/core/Grid';
import {AppInlineProfile} from "../AppInlineProfile";
import { Link as RouterLink } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import {  HiveSVGIcon, 
          BlogIcon,
          StoreIcon, 
          InformationIcon, 
          FarmIcon,
          MarketIcon,
          FarmingIcon } from './Icons';
import Tooltip from '@material-ui/core/Tooltip';
import { createMuiTheme, makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    paperBrown: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
      backgroundColor: "#532C0C",
    },
    font: {
      fontFamily: '"Orbitron", sans-serif',
    },
  }));

const theme = createMuiTheme({
    palette: {
      primary: { 500: '#00211B' }, // custom color in hex 
    },
  });
  
  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#000000",
      color: '#DFB17B',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
    },
  }))(Tooltip);

export default function DesktopTopbar(){
    const classes = useStyles();

    const Link1 = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

    return (
<div className="layout-topbar clearfix">
<Grid container spacing={0}>
    <Grid item xs={6}>
        <Grid container spacing={0}>
            <Grid item xs={1}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="error" className={classes.font}>Home</Typography>
                </React.Fragment>
              }
              placement="top"
              TransitionComponent={Zoom}
              >
            <IconButton className="layout-menu-button" component={Link1} to="/home">
            <FarmIcon />
            </IconButton>
            </HtmlTooltip>
            </Grid>
            <Grid item xs={1}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="error" className={classes.font}>Inventory(coming soon)</Typography>
                </React.Fragment>
              }
              placement="top"
              TransitionComponent={Zoom}
              >
            <IconButton className="layout-menu-button" component={Link1} to="/home">
            <FarmingIcon />
            </IconButton>
            </HtmlTooltip>
            </Grid>

            <Grid item xs={1}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="error" className={classes.font}>Market(coming soon)</Typography>
                </React.Fragment>
              }
              placement="top"
              TransitionComponent={Zoom}
              >
            <IconButton className="layout-menu-button" component={Link1} to="/home">
            <MarketIcon />
            </IconButton>
            </HtmlTooltip>
            </Grid>

            <Grid item xs={1}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="error" className={classes.font}>Trending Posts</Typography>
                </React.Fragment>
              }
              placement="top"
              TransitionComponent={Zoom}
              >
            <IconButton className="layout-menu-button" component={Link1} to="/trending">
            <BlogIcon />
            </IconButton>
            </HtmlTooltip>
            </Grid> 
            
            <Grid item xs={1}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="error" className={classes.font}>FAQ(coming soon)</Typography>
                </React.Fragment>
              }
              placement="top"
              TransitionComponent={Zoom}
              >
            <IconButton className="layout-menu-button" component={Link1} to="/home">
            <InformationIcon />
            </IconButton>
            </HtmlTooltip>
            </Grid>

             <Grid item xs={1}>
            <HtmlTooltip
              title={
                <React.Fragment>
                  <Typography color="error" className={classes.font}>Visit Hive!</Typography>
                </React.Fragment>
              }
              placement="top"
              TransitionComponent={Zoom}
              >
            <a href="https://peakd.com/" target="_default">    
            <IconButton className="layout-menu-button">
            <HiveSVGIcon />
            </IconButton>
            </a>
            </HtmlTooltip>
            </Grid>         

        </Grid>
    </Grid>
    <Grid item xs={6}>
        <div className="layout-topbar-icons button">
            <AppInlineProfile />
        </div>
    </Grid>
</Grid>
</div> 
    );
}