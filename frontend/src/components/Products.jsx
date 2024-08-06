import "../css/products.css"
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const search = query.get('search');
    
    useEffect(() => {
        handleSearch();
    }, [search])

    const handleSearch = async () =>{
        try {
            const response = await fetch(`http://localhost:3001/items?search=${search}`);
            const data = await response.json();
    
            if (response.ok) {
                setProducts(data);
            }
    
    
        } catch (error) {
    
        }
    }
    

    return (
        <>
            <ul>
                <li>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
                    <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                    <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                    <strong>109.95$</strong>
                    <strong>3.9</strong>
                </li>
            </ul>
        </>


    );
}

export default Products;