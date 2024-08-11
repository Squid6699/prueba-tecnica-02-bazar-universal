import React, { useEffect, useState } from 'react'
import './../css/item.css'
import { useParams } from 'react-router-dom';
import Header from './Header';
import addCart from "../assets/add-cart.svg";
import removeCartImg from "../assets/remove-cart.svg";
import { useCart } from "../hooks/useCart";

function Item() {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const {handleSetCart, isInCart, removeCart} = useCart();

    useEffect(() => {
        itemFetch(id);
    }, [id]);

    const itemMapped = item?.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
        rate: item.rating.rate,
        count: item.rating.count

    }))

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
            <Header spot={"item"}/>

            <main>
                <ul>
                    {itemMapped.map((item) => (
                        <div key={item.id}>
                            <li className="item-grid">
                                <img src={item.image} alt={item.title} className="item-img-grid" />
                                <h2 className="item-title-grid">{item.title}</h2>
                                <p className="item-description-grid">{item.description}</p>
                                <strong className="item-price-grid">{item.price}$</strong>
                                <strong className="item-count-grid">{item.count} disponibles</strong>
                                <div className="products-rating-grid">
                                    <div className="rating-stars" style={{ '--rating': item.rate }}></div>
                                </div>
                            </li>
                            <div className="cart-btn-container">
                                {!isInCart(item.id) ? 
                                    <button type="button" onClick={() => handleSetCart(item)}><img src={addCart}/> AGREGAR</button>
                                    :
                                    <button type="button" onClick={() => removeCart(item.id)}><img src={removeCartImg}/> ELIMINAR</button>
                                }
                                
                            </div>
                        </div>
                    ))}
                </ul>
            </main>
        </>
    );
}

export default Item;