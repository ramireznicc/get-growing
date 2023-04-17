import React from "react";
import { CartWidget } from "./CartWidget";
import './NavBar.css'

export const NavBar = () => {
  return(
    <header className="NavBar">
      <div className="NavBar--div">
        <i class="fa-solid fa-leaf"></i>
        <h2 className="NavBar--h2">getGrowing</h2>
        <h6 className="NavBar--h6">Plants Boutique</h6>
      </div>
      <nav>
        <ul className="NavBar--ul">
          <li><a href="#">Plants</a></li>
          <li><a href="#">Seeds</a></li>
          <li><a href="#">Plantpots</a></li>
          <li><a href="#">Sprinklers</a></li>
        </ul>
      </nav>
      <CartWidget counter={11}/>
    </header>
  )
}