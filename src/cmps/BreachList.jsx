import React, { useRef, useState, useEffect, useContext } from "react";
import BreachPreview from "./BreachPreview";
import { BreachContext } from "../context/BreachContext";

export default function BreachList(props) {
  const { dispatch } = useContext(BreachContext);
  const [element, setElement] = useState("");

  const observer = useRef(
    new IntersectionObserver((entries) => {
      const firstElement = entries[0];
      if (firstElement.isIntersecting) {
        incOffset();
      }
    }),
    { thershold: 1 }
  );

  useEffect(() => {
    const currElement = element;
    const currObserver = observer.current;
    if (currElement) {
      currObserver.observe(currElement);
    }
    return () => {
      if (currElement) {
        currObserver.unobserve(currElement);
      }
    };
  }, [element]);

  function incOffset() {
    dispatch({ type: "INC_OFFSET" });
  }

  return (
    <ul className="list">
      {props.breaches.map((breach) => (
        <div ref={setElement} key={breach.PwnCount} className="item">
          <BreachPreview breach={breach}></BreachPreview>
        </div>
      ))}
    </ul>
  );
}
