import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import Comments from './Comments';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import SellerDetails from './SellerDetails';
import { useParams, Link } from 'react-router-dom';
import products from "./../../../data provider/products";



const useStyles = makeStyles((theme) => ({
    container:{
        [theme.breakpoints.up('md')]:{
            display: 'block',
        },
        display: 'none',
    },

    productContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: "3px solid #e0e0e2",
    },
    productDetailsContainer: {
        marginRight: 30,
    },
    productDetailSellerContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }
}));

const ProductPageForUpMD = () => {
    const classes = useStyles();
    const {id} = useParams();
    const product = products[id];
    return (
        <>
            <Container className={classes.container}>
                <Grid container>
                    <Grid item md={4}>
                        <ProductImage image = {product.image} title = {product.title}/>
                    </Grid>
                    <Grid item md={8}>
                        <div className={classes.productDetailsContainer}>
                            <div className={classes.productName}>
                                <h5>{product.title}</h5>
                            </div>
                            <div className={classes.productDetailSellerContainer}>
                                <ProductDetails />
                                <SellerDetails price={product.price} id={id} />
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <Comments id={id} />


            </Container>

        </>
    )
}

export default ProductPageForUpMD