import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import ProductInDigiPlus from '../ProductInDigiPlus';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        [theme.breakpoints.up('md')]: {
            width: "30%",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,   
            marginRight: 5,
        },
        [theme.breakpoints.down('sm')]: {
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,   
        },
        backgroundColor: "White",
        padding: "0px 20px",
    },
    productContainer:{
        textAlign: 'center',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 0,

    },
    link: {
        textDecoration: 'none',
        color: '#a63489',

    },
}));

const FastSending = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.title}>
                <h4>هدیه نقدی</h4>
                <a className={classes.link} href='#'>مشاهده همه</a>
            </div>
            <div className={classes.productContainer}>
                <ProductInDigiPlus/>
                <ProductInDigiPlus/>
                <ProductInDigiPlus/>
                <ProductInDigiPlus/>
                <ProductInDigiPlus/>
                <ProductInDigiPlus/>
            </div>
        </div>
    )
}

export default FastSending