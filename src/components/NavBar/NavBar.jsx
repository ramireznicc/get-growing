import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

export const NavBar = () => {
  const itemsMenu = [
    "Plants",
    "Seeds",
    "Plantpots",
    "Sprinklers",
    <CartWidget />,
  ];

  return (
    <header className="NavBar">
      <div className="NavBar--div">
        <FontAwesomeIcon className="NavBar--icon" icon={faLeaf} />
        <h2 className="NavBar--h2">getGrowing</h2>
      </div>
      <nav>
        <ul className="NavBar--ul">
          {itemsMenu.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
