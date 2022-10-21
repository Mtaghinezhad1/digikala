import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartProvider";
import products from "../../../data provider/products";

const useSttyles = makeStyles((theme) => ({
    mainContainer: {
        position: 'fixed',
        bottom: 0,
        backgroundColor: "white",
        display: 'none',
        width: "100%",
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        borderTop: "1px solid #f0f0f2",
        boxShadow: "0px 0px 3px 0px grey",
        zIndex: 1000,
    },
    btn: {
        width: "50%",
        borderRadius: 10,
        height: 48,
    },
    priceRow: {
    }
}));

const PriceCardMobile = () => {
    const classes = useSttyles();
    const { cart, add1ToCart, remove1FromCart } = useContext(CartContext);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let productPrice = 0;
     cart.map((item) => {
        productPrice = products[item.id].price * item.count + productPrice;

        })
        setPrice(productPrice);
    }, [cart]);

    return (
        <>
            <div className={classes.mainContainer}>
                
                <Button color='secondary' variant="contained" className={classes.btn}>ادامه</Button>
                <div className={classes.priceRow}>
                    <p>جمع سبد خرید</p>
                    <p>{price} تومان</p>
                </div>
            </div>
        </>

    );
}

export default PriceCardMobile;
