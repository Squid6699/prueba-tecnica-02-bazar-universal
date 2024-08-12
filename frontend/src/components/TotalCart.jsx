import React from 'react'
import "../css/totalCart.css"
import {useCart} from "../hooks/useCart"

function TotalCart(){
    const {cartMapped, totalCartPrice} = useCart();
    return(
        <>
            <aside className='container'>
                <div className='info-cart'>
                    <span>PRODUCTOS ({cartMapped.length})</span> {/* PONER LA CANTIDAD DE ARTICULOS DE CADA UNO Y NO EN GENERAL */}
                    <span>$4950</span> {/* PONER EL TOTAL DE LOS PRODUCTOS DEPENDIENDO SU CANTIDAD */}
                    <span>ENVIO</span>
                    <span>GRATIS</span>
                    <strong>TOTAL</strong>
                    <strong>${totalCartPrice}</strong> {/* TERMINAR DE SACAR EL METODO PARA SACAR EL TOTAL DE PRODUCTOS*/}
                    <button>COMPRAR</button>
                </div>
            </aside>
        </>
    );
}

export default TotalCart;