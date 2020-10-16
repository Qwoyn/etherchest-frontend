import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    whiteSpace: 'wrap',
    color: "#000000"
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
}));

export default function FooterPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          
            <Grid container spacing={3}>
                <Grid item xs={6}>
                <Grid container spacing={3}>
                        <Grid item xs={6}>
                                <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="left">
                                <font color="#F7F0F0">
                                <a href="https://www.etherchest.com" target="_blank">EtherChest.com</a>
                                </font>
                                </Typography>
                                <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="left">
                                <font color="#F7F0F0">
                                © 2020 EtherChest.com 
                                </font>
                                </Typography>
                                <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="left">
                                <font color="#F7F0F0">
                                All Rights Reserved                  
                                </font>
                                </Typography>
                        </Grid>
                        <Grid item xs={6}>
                           
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            
                        </Grid>
                        <Grid item xs={6}>
                                <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="right">
                                <font color="#F7F0F0">
                                <a href="https://twitter.com/etherchest" target="_blank">Twitter</a>                
                                </font>
                                </Typography>
                                <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="right">
                                <font color="#F7F0F0">
                                <a href="https://facebook.com/etherchest" target="_blank">Facebook</a>                
                                </font>
                                </Typography>
                                <Typography color="textSecondary" gutterBottom variant="body2" className={classes.font} align="right">
                                <font color="#F7F0F0">
                                <a href="https://discord.gg/P4NbDaV" target="_blank">Discord</a>                
                                </font>
                                </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
         <br/>
        </Grid>
      </Grid>
    </div>
  );
}
