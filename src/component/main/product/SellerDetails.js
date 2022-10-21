import { makeStyles, Container, Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartProvider';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "#f0f0f1",
        border: "1px solid #e0e0e2",
        borderRadius: 10,
        padding: 20,

        textAlign: 'center',
        width: "38%",
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    seller: {
        borderBottom: "1px solid #e0e0e2",
        textAlign: 'right',
    },
    btn: {
        width: "90%",
        borderRadius: 10,
    },
    h4: {
        color: "#19bfd3",
        margin: 0,
    },
    h5: {
        margin: 0,
    },
    link: {
        textDecoration: 'none',
    },
    price: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: "10px 0px",
        borderBottom: "1px solid #e0e0e2",


    }

}));

const SellerDetails = ({price, id}) => {
    const classes = useStyles();
    const {add1ToCart} = useContext(CartContext);
    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.seller} >
                    <div className={classes.title}>
                        <h5 className={classes.h5}>فروشنده</h5>
                        <a href='#' className={classes.link}>
                            <h5 className={classes.h4}>4 فروشنده دیگر</h5>
                        </a>
                    </div>
                    <p>دیجی کالا</p>
                </div>


                <div className={classes.price} >
                    <h5 className={classes.h5} >قیمت فروشنده</h5>
                    <h5 className={classes.h5} >{price} تومان</h5>
                </div>
                <Button className={classes.btn} onClick={()=>add1ToCart(id)} variant='contained' color='secondary'>افزودن به سبد</Button>



            </div>
        </>
    )
}

export default SellerDetails