import React, { useState } from 'react'
import store from "../assets/store.svg"
import './../css/home.css'
import { useNavigate } from 'react-router-dom';
import Search from './Search';

function Home(){

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmitSearch = async (e) =>{
        e.preventDefault();

        if (!search){
            return;
        }
        navigate(`/items?search=${encodeURIComponent(search)}`);
    }

    const handleSearch = (e) =>{
        setSearch(e);
    }

    return(
        <>
            <form onSubmit={handleSubmitSearch} className='form-search'>
                <img src={store} alt="" style={{height: "100px", width: "100px"}}/>
                <h2>BAZAR ONLINE</h2>
                <div className='search'>
                    <Search search = {search} handleSearch={handleSearch}/>
                    <button type="submit" className='search-btn'>BUSCAR</button>
                </div>
            </form>
        </>
    );
}

export default Home;