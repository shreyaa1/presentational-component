import React from "react";
import { SearchIcon } from "../images/search-icon";

export const Search = () => {
  return (
    <div>
      <form className="form  boxShadow">
        <input placeholder="Search for Companies, Investors, Keywords" />
        <SearchIcon />
      </form>
    </div>
  );
};
