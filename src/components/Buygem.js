import React, {useContext, useState} from "react";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import {gemNames, gemTypes} from "../service/EtherchestAPI";
import {StateContext} from "../App";
import {sign} from "hivesigner";
import useSteemKeychain from "../hooks/useSteemKeychain";

export default function Buygem({type}) {
  const {username, gem} = useContext(StateContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasSteemKeychain = useSteemKeychain();

  const handleSubmit = async e => {
    e.preventDefault();
    if (gem && username) {
      setIsSubmitting(true);

      const memo = `diamond diamond`;
      const to = "etherchest";
      const amount = gemTypes[type].str;
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
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmit}
      />
      </div>
    </>
  );
}
