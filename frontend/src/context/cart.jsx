import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    const removeCart = (product) =>{
        const filter = [...cart, cart.filter((item) => item.id !== product.id)];
        setCart(filter);
    }

    const handleSetCart = (product) =>{
        setCart([...cart, product]);
    }

    return(
        <CartContext.Provider value={{
            cart,
            handleSetCart,
            removeCart,
        }}>{children}</CartContext.Provider>
    );
}