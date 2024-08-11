import React from 'react'
import store from "../assets/store.svg"
import Search from './Search';
import { useSearch } from '../hooks/useSearch';
import { Link } from 'react-router-dom';
import cart from "../assets/cart.svg";
import leftArrow from "../assets/arrow.svg";


function Header({spot}){
    const { handleSubmitSearch } = useSearch();
    return(
        <header>
            {spot === "products" && <Link to="/"><img src={store}/></Link>}
            {spot === "item" && <Link to={-1}><img src={leftArrow}/></Link>}

            {spot === "cart" && <Link to={-1}><img src={leftArrow}/></Link>}
            
            <form onSubmit={handleSubmitSearch}>
                <Search />
            </form>
            {spot === "cart" ? <Link to="/"><img src={store} /></Link> : <Link to={"/myCart"}><img src={cart} /></Link>}
        </header>
        
    );
}

export default Header;