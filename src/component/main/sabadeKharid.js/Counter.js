import { makeStyles } from "@material-ui/core";
import { Add,  Remove } from "@material-ui/icons";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";

const useSttyles = makeStyles((theme) => ({
    mainContainer: {
        borderRadius: 10,
        border: "1px solid #f0f0f1",
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    
}));

const Counter = ({id, arrayIndex}) => {
    const classes = useSttyles();
    const {cart, add1ToCart, remove1FromCart} = useContext(CartContext);
    return (
        <>
            <div className={classes.mainContainer}>
                <Add onClick={()=>add1ToCart(id)} color="secondary" />
                <p>{cart[arrayIndex].count}</p>
                <Remove onClick={()=>remove1FromCart(id)} color="secondary" />
            </div>
        </>

    );
}

export default Counter;
