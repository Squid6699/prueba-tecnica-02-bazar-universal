import React, { useState } from 'react'
import store from "../assets/store.svg"
import './../css/home.css'
import Search from './Search';
import { useSearch } from "../hooks/useSearch"

function Home(){

    const {handleSubmitSearch} = useSearch();

    return(
        <>
            <form onSubmit={handleSubmitSearch} className='form-search'>
                <img src={store} alt="" style={{height: "100px", width: "100px"}}/>
                <h2>BAZAR ONLINE</h2>
                <div className='search'>
                    <Search/>
                    <button type="submit" className='search-btn'>BUSCAR</button>
                </div>
            </form>
        </>
    );
}

export default Home;