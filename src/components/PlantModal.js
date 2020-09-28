import React, {useContext, useState, useEffect} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {gardenNames, gemNames} from "../service/EtherchestAPI";
import {Dropdown} from "primereact/dropdown";
import _ from "lodash";
import {StateContext} from "../App";

export default function PlantModal({
  isOpen,
  toggleModal,
  availableGardens,
  availablegems,
  username
}) {
  const [gem, setgem] = useState();
  const [garden, setGarden] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {steemConnectAPI} = useContext(StateContext);
  useEffect(() => {
    if (!isOpen) {
      setgem();
      setGarden();
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const planted = error => {
    if (error) {
      setIsSubmitting(false);
    } else {
      toggleModal();
    }
  };

  const handleSubmit = () => {
    if (username && gem && garden) {
      setIsSubmitting(true);

      const custom_json_id = "qwoyn_plant";
      const custom_JSON = JSON.stringify({
        addr: garden.id,  
        gem: gem.strain
      });

      steemConnectAPI.customJson(
        [],
        [username],
        custom_json_id,
        custom_JSON,
        planted
      );
    }
  };

  return (
    <>
      <Dialog
        header="Plant a gem"
        visible={isOpen}
        modal={true}
        style={{width: "50vw", maxWidth: 500, background: "#000000"}}
        onHide={() => toggleModal("plantgemModal")}
        closeOnEscape={true}
        dismissableMask={true}
        id="plantgemModal"
      >
        {availableGardens.length === 0 && (
          <p><b>Sorry, you don't have any available gardens</b></p>
        )}
        {availablegems.length === 0 && <p>Sorry, you don't have any gems. Please visit the gem market.</p>}
        {availableGardens.length > 0 && availablegems.length > 0 && (
          <>
            <label htmlFor="gem">gem</label>
            <Dropdown
              optionLabel="name"
              value={gem}
              id="gem"
              options={_.uniqBy(availablegems, gem => gem.strain).map(
                gem => ({
                  ...gem,
                  name: `${gemNames[gem.strain]}`
                })
              )}
              style={{width: "100%"}}
              onChange={e => {
                setgem(e.value);
              }}
              placeholder="Choose a gem..."
            />
            <label htmlFor="garden">Garden</label>
            <Dropdown
              optionLabel="name"
              id="garden"
              value={garden}
              options={_.uniqBy(availableGardens, garden => garden[0]).map(
                garden => ({id: garden, 
                  name: `${gardenNames[garden[0]]}`
                })
              )}
              style={{width: "100%"}}
              onChange={e => {
                setGarden(e.value);
              }}
              placeholder="Choose a plot..."
            />
            <Button
              disabled={isSubmitting}
              label={isSubmitting ? "Planting" : "Plant"}
              onClick={handleSubmit}
            />
          </>
        )}
      </Dialog>
    </>
  );
}
