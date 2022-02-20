import React from "react";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search">
      <input
        onChange={(event) => handleSearchText(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
