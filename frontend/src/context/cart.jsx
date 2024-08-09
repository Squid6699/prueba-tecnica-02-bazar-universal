import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    const cartMapped = cart?.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        description: item.description,
        category: item.category,
        image: item.image,
        rate: item.rate,
        count: item.count

    }))

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
            cartMapped,
            handleSetCart,
            removeCart,
            isInCart,
        }}>{children}</CartContext.Provider>
    );
}