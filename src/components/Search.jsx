import React from 'react';

function Search({searchQuery, onSearch}) {
  return (
    <div className="search">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search your Tracks"
          onChange={(e) => onSearch(e.target.value)}
        />
        <i>🔎</i>
  </div>
  );
}

export default Search;