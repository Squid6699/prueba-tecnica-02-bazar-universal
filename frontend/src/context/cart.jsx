import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState();

    useEffect(() => {
        const initialCount = cart.reduce((acc, item) => {
            acc[item.id] =  count[item.id] || 1 ;
            return acc;
        }, {});
        setCount(initialCount);
      }, [cart]);

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

        setCount((prevCount) => {
            const { [product]: _, ...newCount } = prevCount;
            return newCount;
        });
      
    }

    const handleSetCart = (product) =>{
        setCart([...cart, product]);
    }

    const isInCart = (product) =>{
        return cart.some((item) => item.id === product);
    }

    const handleCount = (e, id) => {
        setCount((prevCount) => ({...prevCount, [id]: Math.max(e, 0)}));
    }

    return(
        <CartContext.Provider value={{
            cartMapped,
            handleSetCart,
            removeCart,
            isInCart,
            count,
            handleCount
        }}>{children}</CartContext.Provider>
    );
}