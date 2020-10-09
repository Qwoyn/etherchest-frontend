import React, {useContext, useState, useEffect} from "react";
import {Button} from "primereact/button";
import Dialog from '@material-ui/core/Dialog';
import {StateContext} from "../App";
import TextField from '@material-ui/core/TextField';

export default function RegisterButton({}) {
  const [usernames, setUsername] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {steemConnectAPI, username} = useContext(StateContext);

  useEffect(() => {
    if (isSubmitting) {
      setUsername(username);
      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  const registered = error => {
    if (error) {
      setIsSubmitting(false);
    } else {
      setIsSubmitting(true);
    }
  };

  const handleSubmit = () => {
    if (usernames) {
      setIsSubmitting(true);

      const custom_json_id = "etherchest_register";
      const custom_JSON = JSON.stringify({username: usernames});

      steemConnectAPI.customJson(
        [],
        [usernames], 
        custom_json_id,
        custom_JSON,
        registered
      );
    }
  };
  
  return (
    <>
        <TextField id="filled-basic" label="Hive Username" variant="filled" onChange={e => setUsername(e.value)} />
        <br/><br/>
	      <Button
          disabled={isSubmitting}
          label={!isSubmitting ? "Register" : "Registering"}
          onClick={handleSubmit}
          />
    </>
  );
}
