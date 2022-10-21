import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import ProductPageForDownSM from '../component/main/product/ProductPageForDownSM';
import ProductPageForUpMD from '../component/main/product/ProductPageForUpMD';


const useStyles = makeStyles((theme) => ({

}));

const Product = () => {
    const classes = useStyles();
    return (
        <>
            <ProductPageForUpMD/>
            <ProductPageForDownSM/>

        </>
    )
}

export default Product