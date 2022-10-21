import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import AddToCart from './AddToCart';
import Colors from './Colors';
import CommentSM from './CommnetSM';
import Details from './Details';
import ProductImage from './ProductImage';
import { useParams, Link } from 'react-router-dom';
import products from '../../../data provider/products';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
        display: 'none',
    },

}));

const ProductPageForDownSM = () => {
    const classes = useStyles();
    const {id} = useParams();
    const product = products[id];
    return (
        <>
            <div className={classes.mainContainer}>
                <Container className={classes.container}>
                    <ProductImage image = {product.image} title = {product.title} />
                    <Colors />
                    <Details />
                    <CommentSM id={id} />
                </Container>
                <AddToCart id={product.id} price = {product.price} />
            </div>



        </>
    )
}

export default ProductPageForDownSM