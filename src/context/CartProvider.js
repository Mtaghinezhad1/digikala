import React from "react";
import { useState } from "react";

const CartContext = React.createContext();


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const add1ToCart = (id) => {
        let isExist = false;
        let product;
        let modifiedCart;
        cart.map((item) => {
            if (item.id === id) {
                isExist = true;
                let count = item.count + 1;
                modifiedCart = cart.filter((item) => { return item.id != id });
                product = { id: item.id, count: count };
            }
        });
        if (isExist == false) {
            modifiedCart = cart;
            product = { id: id, count: 1 };
        }
        setCart([...modifiedCart, product]);
    }
    const remove1FromCart = (id) => {
        cart.map((item) => {
            if (item.id === id) {
                let product;
                let modifiedCart;

                if (item.count === 1) {
                    setCart(cart.filter((item) => { return item.id !== id }));
                }
                else {
                    let count = item.count - 1;
                    modifiedCart = cart.filter((item) => { return item.id !== id });
                    product = { id: item.id, count: count };
                    setCart([...modifiedCart, product]);
                }
            }
        })
    }



    return <CartContext.Provider value={{ cart, add1ToCart, remove1FromCart }}>
        {children}
    </CartContext.Provider>
}

export { CartContext, CartProvider };