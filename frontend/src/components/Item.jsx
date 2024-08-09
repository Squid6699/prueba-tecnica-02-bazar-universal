import React, { useEffect, useState } from 'react'
import './../css/item.css'
import { useParams } from 'react-router-dom';
import Header from './Header';


function Item() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    

    useEffect(() => {
        itemFetch(id);
    }, [id]);

    const itemFetch = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/items/${id}`)

            const data = await response.json();

            if (response.ok) {
                setItem(data);
            }

        } catch (e) { }
    }

    return (
        <>
            <Header/>

            <main>
                <ul>
                    {item.map((item) => (
                        <div key={item.id}>
                            <li className="item-grid">
                                <img src={item.image} alt={item.title} className="item-img-grid" />
                                <h2 className="item-title-grid">{item.title}</h2>
                                <p className="item-description-grid">{item.description}</p>
                                <strong className="item-price-grid">{item.price}$</strong>
                                <strong className="item-count-grid">{item.rating.count} disponibles</strong>
                                <div className="products-rating-grid">
                                    <div className="rating-stars" style={{ '--rating': item.rating.rate }}></div>
                                </div>
                            </li>
                        </div>
                    ))}
                </ul>
                <div className="cart-btn-container">
                    <button className='cart-btn' type="button">AGREGAR AL CARRITO</button>
                </div>
            </main>
        </>
    );
}

export default Item;