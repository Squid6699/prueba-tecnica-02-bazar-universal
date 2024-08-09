import React from 'react'
import store from "../assets/store.svg"
import Search from './Search';
import { useSearch } from '../hooks/useSearch';
import { Link } from 'react-router-dom';

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
        </header>
    );
}

export default Header;