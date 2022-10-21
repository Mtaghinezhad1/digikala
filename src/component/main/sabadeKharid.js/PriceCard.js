import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { CartContext } from "../../../context/CartProvider";
import products from "../../../data provider/products";

const useSttyles = makeStyles((theme) => ({
    priceContainer: {
        width: 300,
        height: 250,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
        border: "1px solid #f0f0f2",
        borderRadius: 10,
        padding: 10,
        marginRight: 12,
    },
    btn: {
        width: "100%",
        borderRadius: 10,
        marginTop: 24,
    },
    priceRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
    }
}));

const PriceCard = () => {
    const classes = useSttyles();
    const { cart, add1ToCart, remove1FromCart } = useContext(CartContext);
    const [price, setPrice] = useState(0);
    const [realPrice, setRealPrice] = useState(0);
    const [difference, setDifference] = useState(0);

    useEffect(() => {
        let productPrice = 0;
        let productRealPrice = 0;
        let differenceOfPrice = 0;

     cart.map((item) => {
        productPrice = products[item.id].price * item.count + productPrice;
        productRealPrice = products[item.id].realPrice * item.count + productRealPrice;

        })
        setPrice(productPrice);
        setRealPrice(productRealPrice);
        setDifference(productRealPrice - productPrice);
    }, [cart]);
    return (
        <>
            <div className={classes.priceContainer}>

                <div className={classes.priceRow}>
                    <p>قیمت کالاها</p>
                    <p>{realPrice} تومان</p>
                </div>
                <div className={classes.priceRow}>
                    <p>جمع سبد خرید</p>
                    <p>{price} تومان</p>
                </div>
                <div className={classes.priceRow}>
                    <p>سود شما از خرید</p>
                    <p>{difference} تومان</p>
                </div>
                <Button color='secondary' variant="contained" className={classes.btn}>ادامه</Button>
            </div>
        </>

    );
}

export default PriceCard;
