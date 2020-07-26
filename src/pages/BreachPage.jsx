import React, { useEffect, useContext } from "react";
import breachService from "../services/breachService";
import BreachList from "../cmps/BreachList";
import { BreachContext } from "../context/BreachContext";

export default function BreachPage() {
  const { breaches, isLoad, offset, dispatch } = useContext(BreachContext);

  useEffect(() => {
    if (offset !== 0 && !isLoad) return;
    dispatch({ type: "SET_LOAD" });
    loadBreaches();
  }, [offset]);

  async function loadBreaches() {
    try {
      dispatch({ type: "SET_LOAD" });
      const breachesItems = await breachService.getBreaches(offset);
      dispatch({ type: "SET_BREACHES", breachesItems });
    } catch (err) {
      console.log(" err in breaches", err);
    }
  }

  return (
    <div className={`flex1 container top-padding`}>
      {breaches.length > 0 && <BreachList breaches={breaches}></BreachList>}
    </div>
  );
}
