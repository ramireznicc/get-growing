import React from "react";
import { useState, useEffect } from "react";
import products from "../../data/products.json";
import { CartWidget } from "../CartWidget/CartWidget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  const [itemsMenu, setItemsMenu] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => resolve(products));
    productList.then((result) => {
      const categories = result.map((item) => item.category);
      const uniqueCategory = new Set(categories);

      setItemsMenu(Array.from(uniqueCategory));
    });
  }, []);

  return (
    <header className="NavBar">
      <div className="NavBar--div">
        <FontAwesomeIcon className="NavBar--icon" icon={faLeaf} />
        <NavLink to="/">
          <h2 className="NavBar--h2">getGrowing</h2>
        </NavLink>
      </div>
      <nav>
        <ul className="NavBar--ul">
          {itemsMenu.map((item) => (
            <li key={item}>
              <NavLink to={`/category/${item}`}>{item}</NavLink>
            </li>
          ))}
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};
