import React from 'react'
import store from "../assets/store.svg"
import Search from './Search';
import { useSearch } from '../hooks/useSearch';
import { Link } from 'react-router-dom';
import cart from "../assets/cart.svg";

function Header(){
    const { handleSubmitSearch } = useSearch();
    return(
        <header>
            <Link to="/">
                <img src={store} />
            </Link>
            <form onSubmit={handleSubmitSearch}>
                <Search />
            </form>
            <Link to={"/myCart"}>
                <img src={cart} />
            </Link>
        </header>
        
    );
}

export default Header;