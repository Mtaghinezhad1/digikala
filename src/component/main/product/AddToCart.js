import { makeStyles, Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartProvider';

const useStyles = makeStyles((theme) => ({
mainContainer:{
    width: "100%",
    backgroundColor: "white",
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: "1000",
    borderTop: "1px solid #f0f0f1",
    boxShadow: "5px 0px 5px 1px lightblue",
},
btn: {
    width: "30%",
}

}));

const AddToCart = ({id, price}) => {
    const classes = useStyles();
    const {add1ToCart} = useContext(CartContext);
    return (
        <>
          <div className={classes.mainContainer}>
          <Button onClick={()=>add1ToCart(id)} variant='contained' color='secondary' className={classes.btn} >افزودن به سبد خرید</Button>
            <p className={classes.price}>{price} تومان</p>
            </div>  

        </>
    )
}

export default AddToCart