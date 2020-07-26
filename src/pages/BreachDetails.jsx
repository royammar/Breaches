import React, { useContext, useEffect, useState } from "react";
import { BreachContext } from "../context/BreachContext";
import StorageService from "../services/StorageService";

export default function BreachDetails(props) {
  const { breaches, dispatch } = useContext(BreachContext);
  const [breach, setBreach] = useState(null);

  function loadItem() {
    let PwnCount = +props.match.params.id;
    let item = breaches.find((currBreach) => currBreach.PwnCount === PwnCount);
    if (!item) {
      loadFromStroage(PwnCount);
    } else {
      setBreach(item);
      StorageService.post("items", item);
    }
  }

  async function loadFromStroage(PwnCount) {
    let item = await StorageService.get("items", PwnCount);
    setBreach(item);
  }

  useEffect(() => {
    dispatch({ type: "SET_LOAD" });
    loadItem();
    return () => {
      dispatch({ type: "SET_LOAD" });
    };
  }, []);

  return (
    <div className={`flex column flex1 container top-padding details`}>
      {breach ? (
        <React.Fragment>
          <div className="flex item-title-wrapper wrap">
            <img className="item-image" src={breach.LogoPath} alt="" />
            <h3 className="item-title">{breach.Domain || breach.Name}</h3>
          </div>
          <hr />
          <div className="item-date">Breach Date: {breach.BreachDate}</div>
          <p
            className="item-description flex1"
            dangerouslySetInnerHTML={{ __html: breach.Description }}
          />
          <div className="data-classes">
            Impacted data classes :
            {breach.DataClasses.map((DataClass, index) => (
              <p key={index} className="item">
                {DataClass}
              </p>
            ))}
          </div>
        </React.Fragment>
      ) : (
        <div>No Details To show</div>
      )}
    </div>
  );
}
