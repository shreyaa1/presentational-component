import React from "react";
import { SearchIcon } from "../images/search-icon";

export const Search = ({ placeholder = "" }) => {
  return (
    <div>
      <form className="form  boxShadow">
        <input placeholder={placeholder} />
        <SearchIcon />
      </form>
    </div>
  );
};
