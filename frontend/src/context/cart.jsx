import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    const removeCart = (product) =>{
        const filter = (prevState => prevState.filter((item) => item.id !== product));
        setCart(filter);
    }

    const handleSetCart = (product) =>{
        setCart([...cart, product]);
    }

    const isInCart = (product) =>{
        return cart.some((item) => item.id === product);
    }

    return(
        <CartContext.Provider value={{
            cart,
            handleSetCart,
            removeCart,
            isInCart,
        }}>{children}</CartContext.Provider>
    );
}