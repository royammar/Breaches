import React, {useState, useEffect } from "react";
import { NavLink} from "react-router-dom";

import StorageService from "../services/StorageService";

export default function NavBar() {
 
  const [btnStatus,setBtnStatus]=useState(false)


   function toggleTheme() {
    let status=!btnStatus
    setBtnStatus(status)
    document.documentElement.setAttribute('data-theme', btnStatus ? "light" : "dark");
    StorageService.save("theme", btnStatus ?  "light":"dark");
  }


  useEffect(() => {
      loadUserPerf()
  }, [])


  function loadUserPerf() {
      let userPref=document.documentElement.getAttribute("data-theme") === "dark"
    setBtnStatus(userPref)
  }

 

  return (
    <div className={`nav-bar container flex`}>
      <div className={`center-side-nav flex column align-center `}>
        <NavLink className="section selected" to="/breach" exact>
          <li>Home</li>
        </NavLink>
        <NavLink className="section selected" to="/breach" exact>
          <li>Breaches</li>
        </NavLink>
      
        <NavLink  className="section selected" to="/breach" exact>
          <li>FAQ</li>
        </NavLink>
      </div>

      <div className={`right-side-nav flex align-center `}>
        <div className="main-search flex">
        <label id="theme-switch" className="theme-switch" htmlFor="checkbox_theme">
    <input onChange={toggleTheme} type="checkbox" id="checkbox_theme" checked={btnStatus}/>
</label>


        </div>
      </div>
    </div>
  );
}
