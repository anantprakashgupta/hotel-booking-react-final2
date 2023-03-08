import React from 'react';

function SearchBar(props) {
  return (
    <div>
      <h3>Search Hotel</h3>
      <input
        type="text"
        class="input-secrh"
        // id="f_serch2"
        placeholder="Search Hotel By City"
        onChange={(e) => props.onSearch(e.target.value)}
        value={props.value}
      />
    </div>
  );
}

export default SearchBar;
