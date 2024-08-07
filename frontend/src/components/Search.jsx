import React from 'react'
import { useSearch } from '../hooks/useSearch';

function Search(){
    const {search, setSearch} = useSearch();

    return(
        <>
            <input type="text" placeholder='Laptos, Smartphones, ...' value={search} onChange={(e) => setSearch(e.target.value)} />
        </>
    );
}

export default Search;