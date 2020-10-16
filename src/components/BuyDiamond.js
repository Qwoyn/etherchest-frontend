import React, {useContext, useState} from "react";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import {EtherchestAPI, DiamondNames, gemTypes} from "../service/EtherchestAPI";
import {StateContext} from "../App";
import {sign} from "hivesigner";
import useHiveKeychain from "../hooks/useHiveKeychain";

export default function BuyGem({type}) {
  const etherchestApi = new EtherchestAPI();
  const {username} = useContext(StateContext);
  const [gem, setGem] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const hasHiveKeychain = useHiveKeychain();

  const handleSubmit = async e => {
    e.preventDefault();
    if (gem && username) {
      setIsSubmitting(true);

      const memo = `${gem.name} ${gem.name}`;
      const to = "etherchest";
      const amount ="50000.000"
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
          setGem();
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

  let buttonLabel = "Purchase";
  if (isSubmitting) buttonLabel = "Purchasing";
  if (!username) buttonLabel = "Please Sign in";

  return (
    <>
      <div className="p-col-12 p-md-12">
        <Dropdown
          disabled={isSubmitting || !username}
          optionLabel="name"
          value={gem}
          id="name"
          options={Object.keys(DiamondNames).map(key => ({
            id: key,
            name: DiamondNames[key]
          }))}
          style={{width: "100%"}}
          onChange={e => {
            setGem(e.value);
          }}
          placeholder="Choose a gem..."
        />     
        <br/><br/>   
        <Button
        disabled={isSubmitting || !username}
        label={buttonLabel}
        onClick={handleSubmit}
      />
      </div>
    </>
  );
}
