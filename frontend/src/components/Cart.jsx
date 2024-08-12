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
                        cartMapped.map((item) => {
                            const itemCount = count.find(c => c.id === item.id)?.cantidad;

                            return(
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
                                        <button disabled = {itemCount === 1} onClick={() => handleCount(item.id, (itemCount)-1)}>-</button>
                                        <input type="number" value={itemCount} onChange={(e) => handleCount(item.id, e.target.value)}/>
                                        <button disabled = {itemCount === 99} onClick={() => handleCount(item.id, (itemCount)+1)}>+</button>
                                        <button onClick={() => removeCart(item.id)}><img src={trash} alt="ELIMINAR"/></button>
                                    </div>
                                </div>
                            );
                        })
                        
                    : <strong className="form-search">CARRITO VACIO</strong>
                    }
                </div>
            </ul>
            <TotalCart/>
        </>
    );
}

export default Cart;