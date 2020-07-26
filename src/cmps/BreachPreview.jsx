
import React from "react";
import { Link } from 'react-router-dom'


export default function BreachPreview({ breach }) {
  
  return (
     <Link className="card flex column align-center " to={`/breach/${breach.PwnCount}`}> 
      <img className="card-image" src={breach.LogoPath} alt="" />
      <div className="card-info">
      <div className="flex justify-center">
      <p className="domain" id="title" >{breach.Domain ||breach.Name}  </p>
      </div>
      <div className="flex justify-center">
      <p className="date">{breach.BreachDate} </p>
      </div>
      </div>
    </Link>
    
  );
}
