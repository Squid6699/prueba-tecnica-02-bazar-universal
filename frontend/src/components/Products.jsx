import "../css/products.css"
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Search from './Search';
import store from "../assets/store.svg"


function Products() {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const search = query.get('search');

    useEffect(() => {
        handleSearch();
    }, [search])

    const handleSearch = async () => {
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
            <header>
                <img src={store}/>
                <Search />
            </header>
            <section>
                <h3 style={{textAlign: "center"}}>Resultados de la busqueda de "{search}": {products.length}</h3>
            </section>
            <ul>
                {products.map((item) => (
                    <div>
                        <li className="card products-grid">
                            <img src={item.image} alt={item.title} className="products-img-grid" />
                            <h2 className="products-title-grid">{item.title}</h2>
                            <p className="products-description-grid">{item.description}</p>
                            <strong className="products-price-grid">{item.price}$</strong>
                            <div className="products-rating-grid">
                                <div className="rating-stars" style={{ '--rating': item.rating.rate }}></div>
                            </div>
                            <hr className="line-grid" />
                        </li>
                        <hr />
                    </div>

                ))}
            </ul>
        </>


    );
}

export default Products;