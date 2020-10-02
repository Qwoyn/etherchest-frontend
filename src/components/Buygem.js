import React, {useContext, useState} from "react";
import {Button} from "primereact/button";
import {gemNames, gemTypes} from "../service/EtherchestAPI";
import {StateContext} from "../App";
import {sign} from "hivesigner";
import useSteemKeychain from "../hooks/useSteemKeychain";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 250,
    background: "#ffffff",
    fontFamily: '"Orbitron", sans-serif',
  },
  media: {
    height: 140,
  },
  font: {
    fontFamily: '"Orbitron", sans-serif',
  },
});

export default function Buygem({type}) {
  const username = useContext(StateContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasSteemKeychain = useSteemKeychain();
  const classes = useStyles();

  const handleSubmit = async e => {
    e.preventDefault();
    if (username) {
      setIsSubmitting(true);

      const memo = `diamond diamond`;
      const to = "etherchest";
      const amount = "20";
      const currency = "HIVE";

      if (hasSteemKeychain()) {
        const steem_keychain = window.steem_keychain;
        try {
          await new Promise((resolve, reject) => {
            return steem_keychain.requestTransfer(
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
            ? `${process.env.REACT_APP_URL}/market/gems`
            : "http://localhost:3000/market/gems"
        );
      }
    }
  };

  let buttonLabel = "Purchase";
  if (isSubmitting) buttonLabel = "Purchasing";
  if (!username) buttonLabel = "Please Sign in";

  return (
    <>
      <div className="p-col-12 p-md-12"> 
       <Button
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmit}
        className={classes.font}
      />
      </div>
    </>
  );
}
