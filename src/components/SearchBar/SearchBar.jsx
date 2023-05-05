import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input type="text" />
      <Button>
        <FontAwesomeIcon icon={faSearch} />
        Search
      </Button>
    </div>
  );
};
