import React, { useState } from 'react'
import './../css/search.css'

function Search(){

    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([])

    const handleSubmitSearch = async (e) =>{
        e.preventDefault();

        if (!search){
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/items?search=${search}`);
            const data = await response.json();

            if (response.ok){
                setProducts(data);
            }
        } catch (error) {
            
        }
    }

    return(
        <>
            <form action="" onSubmit={handleSubmitSearch} className='search'>
                <input type="text" placeholder='Laptos, Smartphones, ...' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" className='search-btn'>BUSCAR</button>
            </form>
        </>
    );
}

export default Search;