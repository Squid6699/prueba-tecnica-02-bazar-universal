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
                <h3 style={{textAlign: "center"}}>Resultados de la busqueda de "{searchQuery}": {products.length}</h3>
            </section>

            <ul>
                {products.length !== 0 ?
                    products.map((item) => (
                        <div key={item.id}>
                            <li className="products-grid">
                                <img src={item.image} alt={item.title} className="products-img-grid" onClick={() => hadnleItemSelected(item.id)}/>
                                <h2 className="products-title-grid" onClick={() => hadnleItemSelected(item.id)}>{item.title}</h2>
                                <p className="products-description-grid" onClick={() => hadnleItemSelected(item.id)}>{item.description}</p>
                                <strong className="products-price-grid">{item.price}$</strong>
                                <div className="products-rating-grid">
                                    <div className="rating-stars" style={{ '--rating': item.rating.rate }}></div>
                                </div>
                                <hr className="line-grid" />
                            </li>
                            <hr />
                        </div>
                    ))
                :
                <strong className="form-search">SIN PRODUCTOS DISPONIBLES</strong>
                }
            </ul>
        </>
    );
}

export default Products;