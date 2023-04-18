import React from "react";
import { CartWidget } from "./CartWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'

export const NavBar = () => {
  return(
    <header className="NavBar">
      <div className="NavBar--div">
        <FontAwesomeIcon className="NavBar--icon" icon={faLeaf}/>
        <h2 className="NavBar--h2">getGrowing</h2>
      </div>
      <nav>
        <ul className="NavBar--ul">
          <li><a href="#">Plants</a></li>
          <li><a href="#">Seeds</a></li>
          <li><a href="#">Plantpots</a></li>
          <li><a href="#">Sprinklers</a></li>
          <li><CartWidget counter={11}/></li>
        </ul>
      </nav>
    </header>
  )
}