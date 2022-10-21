import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { CartContext } from './../../../context/CartProvider';


const useSttyles = makeStyles((theme) => ({

    titleRow: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderBottom: "1px solid #f0f0f2",
        marginBottom: 10,


    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]:{
            marginRight: 10,
            width: 110,
        },
        width: "50%",
        '&:hover': {
            cursor: 'pointer',
        }
    },
    titleActive: {
        borderBottom: "3px solid #ef4056",
    },
    h3: {
        color: "#81858b",
        fontSize: 15,
    },
    active:{
        color: "#ef4056",
    },
    number: {
        backgroundColor: "#81858b",
        width: 20,
        height: 20,
        display: 'flex',
        justifyContent: 'center',
        color: "white",
        marginRight: 5,
        borderRadius: 6,
        fontWeight: 800,
    },
    numberActive:{
        backgroundColor: "#ef4056",
    }

}));

const TitleRow = () => {
    const classes = useSttyles();
    const [cartActive,setCartActive]= useState(true);
    const [next,setNext] = useState(false);
    const {cart, add1ToCart, remove1FromCart} = useContext(CartContext);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      let number = 0;
      cart.map((item)=>{
        number = number + item.count;
      })
      setCount(number);
    }, [cart]);

    const clickHandler = () =>{
        setCartActive(!cartActive);
        setNext(!next);
        
    };
    return (
        <>
            <div className={classes.titleRow}>
                <div onClick={()=>clickHandler()} className={clsx(classes.title, cartActive && classes.titleActive)} >
                    <h3 className={clsx(classes.h3, cartActive && classes.active)}>سبد خرید</h3>
                    <p className={clsx(classes.number, cartActive && classes.numberActive)}>{count}</p>
                </div>
                <div onClick={()=>clickHandler()} className={clsx(classes.title, next && classes.titleActive)}>
                    <h3 className={clsx(classes.h3, next && classes.active)}>خرید بعدی</h3>
                </div>
            </div>
        </>

    );
}

export default TitleRow;
