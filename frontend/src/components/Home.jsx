import React from 'react'
import store from "../assets/store.svg"
import cart from "../assets/cart.svg"

import './../css/home.css'
import Search from './Search';
import { useSearch } from "../hooks/useSearch"
import { Link } from 'react-router-dom';

function Home(){

    const {handleSubmitSearch} = useSearch();

    return(
        <>
            <form onSubmit={handleSubmitSearch} className='form-search'>
                <img src={store} alt=""/>
                <Link to={"/myCart"}>
                    <img src={cart} alt=""/>
                </Link>
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