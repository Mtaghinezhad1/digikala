import { Button, makeStyles } from '@material-ui/core';
import React from 'react';
import ProductInDigiPlus from '../ProductInDigiPlus';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        [theme.breakpoints.up('md')]: {
            width: "30%",
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
        },
        [theme.breakpoints.down('sm')]: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,   
            marginBottom: 5,
        },
        backgroundColor: "White",
        
        padding: "0px 20px",

    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 0,


    },
    productContainer:{
        textAlign: 'center',
    },
    link: {
        textDecoration: 'none',
        textAlign: 'center',
        color: '#a63489',
    },

}));

const PresentsInDigiplus = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <div className={classes.title}>
                <h4 className={classes.h4}>هدیه نقدی</h4>
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

export default PresentsInDigiplus