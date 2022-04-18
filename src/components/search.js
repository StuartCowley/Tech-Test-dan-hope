import React, { useState } from "react";
import "../styles/search.css";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";

// eslint-disable-next-line react/function-component-definition
const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };
  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};
