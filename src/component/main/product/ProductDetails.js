import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';
import Colors from './Colors';
import Details from './Details';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        textAlign: 'right',
        width: "58%",
    },


}));

const ProductDetails = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>

                <Colors/>

                <Details/>
            </div>

        </>
    )
}

export default ProductDetails