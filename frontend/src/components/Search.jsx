import React from 'react'

function Search({search, handleSearch}){

    return(
        <>
            <input type="text" placeholder='Laptos, Smartphones, ...' value={search} onChange={(e) => handleSearch(e.target.value)} />
        </>
    );
}

export default Search;