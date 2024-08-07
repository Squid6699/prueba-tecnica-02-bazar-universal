import "../css/products.css"
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Search from './Search';
import store from "../assets/store.svg"
import { useSearch } from "../hooks/useSearch";


function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const {setSearch, handleSubmitSearch} = useSearch();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const searchQuery = query.get('search');

    useEffect(() => {
        SearchFetch();
        setSearch(searchQuery);
    }, [searchQuery]);

    const hadnleItemSelected = (id) => {
        navigate(`/items/${id}`);
    }


    const SearchFetch = async () => {
        try {
            const response = await fetch(`http://localhost:3001/items?search=${searchQuery}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "POST"
            })
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
                <Link to= "/">
                    <img src={store} />
                </Link>
                <form onSubmit={handleSubmitSearch}>
                    <Search />
                </form>
            </header>
            <section>
                <h3>Resultados de la busqueda de "{searchQuery}": {products.length}</h3>
            </section>

            <ul>
                <div className="grid">
                    {products.length !== 0 ?
                        products.map((item) => (
                            <div key={item.id}>
                                <li className="products-grid" onClick={() => hadnleItemSelected(item.id)}>
                                    <img src={item.image} alt={item.title} className="products-img-grid" />
                                    <h2 className="products-title-grid">{item.title}</h2>
                                    <p className="products-description-grid">{item.description}</p>
                                    <strong className="products-price-grid">{item.price}$</strong>
                                    <div className="products-rating-grid">
                                        <div className="rating-stars" style={{ '--rating': item.rating.rate }}></div>
                                    </div>
                                </li>
                            </div>

                        ))
                    :
                    <strong className="form-search">SIN PRODUCTOS DISPONIBLES</strong>
                    }
                </div>
                
            </ul>
        </>
    );
}

export default Products;