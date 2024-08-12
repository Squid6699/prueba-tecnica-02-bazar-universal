import "../css/cart.css"
import { useCart } from "../hooks/useCart";
import Header from "../components/Header"
import { useNavigate } from "react-router-dom";
import TotalCart from "./TotalCart";
import trash from "../assets/trash.svg"

function Cart(){
    const {cartMapped, count, handleCount, removeCart} = useCart();
    const navigate = useNavigate();

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
                                    <button disabled = {count[item.id] === 1} onClick={() => handleCount(count[item.id]-1, item.id)}>-</button>
                                    <input type="number" value={count[item.id]} onChange={(e) => handleCount(e.target.value, item.id)}/>
                                    <button disabled = {count[item.id] === 99} onClick={() => handleCount(count[item.id]+1, item.id)}>+</button>
                                    <button onClick={() => removeCart(item.id)}><img src={trash} alt="ELIMINAR"/></button>
                                </div>
                            </div>
                        ))
                        
                    : <strong className="form-search">CARRITO VACIO</strong>
                    }
                </div>
            </ul>
            <TotalCart/>
        </>
    );
}

export default Cart;