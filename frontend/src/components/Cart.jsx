import "../css/cart.css"
import { useCart } from "../hooks/useCart";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Cart(){
    const {cartMapped} = useCart();
    const navigate = useNavigate();
    const [count, setCount] = useState(1);

    const hadnleItemSelected = (id) => {
        navigate(`/items/${id}`);
    }
    return(
        <>
            <Header spot={"cart"}/>

            <section>
                <h3>Articulos en tu carrito: {cartMapped.length}</h3>
            </section>

            <ul>
                <div className="grid-cart">
                    {cartMapped.length > 0 ?
                        cartMapped.map((item) => (
                            <div className="grid-card-cart" key={item.id}>
                                <li className="cart-grid" onClick={() => hadnleItemSelected(item.id)}>
                                    <img src={item.image} alt={item.title} className="cart-img-grid" />
                                    <h2 className="cart-title-grid">{item.title}</h2>
                                    <p className="cart-description-grid">{item.description}</p>
                                    <strong className="cart-price-grid">{item.price}$</strong>
                                    <div className="cart-rating-grid">
                                        <div className="rating-stars-cart" style={{ '--rating': item.rate }}></div>
                                    </div>
                                </li>
                                 
                                <div className="counter">
                                    <div className="count-less"><button>-</button></div>
                                    <div className="count-item-cart"><input type="number" value={count}/></div>
                                    <div className="count-more"><button onClick={() => setCount(count+1)}>+</button></div>
                                </div>
                                
                            </div>
                        ))
                    : <strong className="form-search">CARRITO VACIO</strong>
                    }
                </div>
            </ul>
        </>
    );
}

export default Cart;