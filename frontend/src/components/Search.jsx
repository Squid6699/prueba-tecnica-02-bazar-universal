import React, { useState } from 'react'
import store from "../assets/store.svg"
import './../css/search.css'
import { useNavigate } from 'react-router-dom';

function Search(){

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmitSearch = async (e) =>{
        e.preventDefault();

        if (!search){
            return;
        }
        
        navigate(`/items?search=${encodeURIComponent(search)}`);
        
    }

    return(
        <>
            <form onSubmit={handleSubmitSearch} className='form-search'>
                <img src={store} alt="" style={{height: "100px", width: "100px"}}/>
                <h2>BAZAR ONLINE</h2>
                <div className='search'>
                    <input type="text" placeholder='Laptos, Smartphones, ...' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type="submit" className='search-btn'>BUSCAR</button>
                </div>
            </form>
        </>
    );
}

export default Search;