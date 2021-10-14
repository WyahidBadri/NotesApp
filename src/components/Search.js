import React from 'react';

const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Type to search" onChange={(e)=> handleSearchNote(e.target.value)}/>
        </div>
    );
}

export default Search;
