import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  media: {
    height: 400,
  },
});

export default function MarketMedia() {
  const classes = useStyles();

  return (
      <div>
        <CardMedia
          className={classes.media}
          image="https://miro.medium.com/max/1200/1*PrWCeKJEFi9fxYtBh27SHQ.jpeg"
          title="Eth 2.0"
        />
      </div>
  );
}