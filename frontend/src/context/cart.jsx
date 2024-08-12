import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({children}){

    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(cart.map(item => ({ id: item.id, cantidad: 1 })));

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


    useEffect(() => {
        const newCount = cartMapped.map((item) => {
            const countItem = count.find(c => c.id === item.id);
            return {
                id: item.id,
                cantidad: countItem ? countItem.cantidad : 1,
            };
        });
        setCount(newCount);
    }, [cart]);


    const removeCart = (product) =>{
        const filter = (prevState => prevState.filter((item) => item.id !== product));
        setCart(filter);
    }

    const handleSetCart = (product) =>{
        setCart([...cartMapped, product]);
    }

    const isInCart = (product) =>{
        return cartMapped.some((item) => item.id === product);
    }

    const handleCount = (id, cantidad) => {
        if (cantidad > 99){
            return;
        }
        setCount(prevCount => prevCount.map(item =>
            item.id === id ? { ...item, cantidad } : item
        ));
    };

    const totalCartPrice = () => {
        var total = 0;
        cartMapped.map((item) => {
            const countItem = count.find(c => c.id === item.id);
            total += parseFloat(item.price * countItem.cantidad);
        })
        return total.toFixed(2);
    }

    const cartTotalCount = () => {
        var total = 0;
        count.map((item) => (
            total += parseFloat(item.cantidad)
        ))
        return total
    }

    return(
        <CartContext.Provider value={{
            cartMapped,
            handleSetCart,
            removeCart,
            isInCart,
            count,
            handleCount,
            totalCartPrice,
            cartTotalCount,
        }}>{children}</CartContext.Provider>
    );
}