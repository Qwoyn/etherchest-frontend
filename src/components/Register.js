import React, {useContext, useState, useEffect} from "react";
import {Button} from "primereact/button";
import Dialog from '@material-ui/core/Dialog';
import {StateContext} from "../App";
import TextField from '@material-ui/core/TextField';

export default function RegisterModal({
  isOpen,
  toggleModal,
}) {
  const [usernames, setUsername] = useState([]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const {steemConnectAPI, username} = useContext(StateContext);

  useEffect(() => {
    if (!isOpen) {
      setUsername(username);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const registered = error => {
    if (error) {
      setIsSubmitting(false);
    } else {
      toggleModal();
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
      <Dialog
        header="Please Register"
        visible={isOpen}
        modal={true}
        style={{width: "50vw", maxWidth: 500}}
        onHide={() => toggleModal("registerModal")}
        closeOnEscape={true}
        dismissableMask={true}
        id="registerModal"
      >
          <>
            <label htmlFor="garden"><b>Please Register by entering your hive username</b></label>
			<br/><br/>
            <TextField id="filled-basic" label="Filled" variant="filled" onChange={e => setUsername(e.value)} />
            <br/><br/>
			  <Button
              disabled={isSubmitting}
              label={isSubmitting ? "Registering" : "Register"}
              onClick={handleSubmit}
              />
          </>
      </Dialog>
    </>
  );
}
