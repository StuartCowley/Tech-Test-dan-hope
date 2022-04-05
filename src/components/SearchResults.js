import React from "react";
import "../styles/searchResults.css";
import PropTypes from "prop-types";

// eslint-disable-next-line react/function-component-definition
const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="para-fail">No results</p>;
    // eslint-disable-next-line no-else-return
  } else {
    return (
      <>
        {results.map((image) => (
          <>
            <div className="all-images" />
            <img className="space-image" src={image} alt="mock" key={image} />
          </>
        ))}
      </>
    );
  }
};

export default SearchResults;

SearchResults.propTypes = {
  // eslint-disable-next-line react/require-default-props
  results: PropTypes.arrayOf(PropTypes.string),
};
