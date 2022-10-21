import {makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    img:{
        width: "30%",
        marginBottom: 10
    },
}));

const ProductInDigiPlus = () => {
    const classes = useStyles();
    return (
        <>
            <a  className={classes.link} href='#'>
                <img className={classes.img} src="https://dkstatics-public.digikala.com/digikala-products/2eb81b453236bf344dbac1c6b63b0c7be632763f_1606244025.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80" />
            </a>
        </>
    )
}

export default ProductInDigiPlus