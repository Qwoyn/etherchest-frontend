import React from "react";
import Buygem from "./Buygem";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#294A0B",
  },
  font : {
    fontFamily: '"Jua", sans-serif',
  },
  paperBlue: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    whiteSpace: 'wrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#154A4A",
  },
  paperBlack: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
    backgroundColor: "#154A4A"
  },
  paperBlacky: {
    padding: theme.spacing(1),
    backgroundColor: "#000000",
  },
  card: {
    maxWidth: 345,
    backgroundColor: "#000000",
  },
  media: {
    height: 140,
  },
}));

export const Marketgems = () => {  
  const classes = useStyles();

  return(
    <Paper className={classes.paperBlacky}>
    <Paper className={classes.paperBlue}>
    <Grid container spacing={3}>
      <Grid item xs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/vAUGcFV.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.font}>
          <font color="DFB17B">Genesis gems</font>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
          <font color="DFB17B">These gems are the first round of gems, are extremely rare and are used to make beta gems.</font>
          </Typography>
          <br/>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.font}>
          <font color="DFB17B"><b>Price: 5 Hive</b></font>
          </Typography>
              <label htmlFor="multiselect" />
            <Buygem type="t" />
        </CardContent>
      </Card>
    </Grid>
    <Grid item xs={8}>
      <Paper className={classes.paper}>
      <Typography paragraph className={classes.font}>
        <font color="DFB17B">Hashkings gems are the main driving force behind the game. 
        </font>
      </Typography>
      <Typography paragraph className={classes.font}>
        <font color="DFB17B">With these gems it is possible to grow plants, 
        create new gems and earn Hive. Unlike our in-game currency Kief(KFQ), 
        gems are custom designed tokens by @disregardfiat and only available within our ecosystem, 
        NOT tradable on Hive-Engine.</font>
      </Typography>
      <Typography paragraph className={classes.font}>
        <font color="DFB17B">Original first round of gems, purchased in the Hashkings gem Bank or bought from other players. 
        These limited edition gems cannot be grown and are limited in number. We call 
        them the Genesis gems because they are the first ones and give life to the beta gems after harvest.</font>
      </Typography>
      <Typography paragraph className={classes.font}>
        <font color="red">Click next when you are finished!</font>
      </Typography>
      </Paper>    
  </Grid>
    </Grid>
    </Paper>
  </Paper>
  )
};
