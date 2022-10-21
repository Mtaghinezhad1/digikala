import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import products from "./../../../data provider/products";

const useSttyles = makeStyles((theme) => ({
    imgPrice: {
        width: 114,
    },
    details: {
        marginRight: 32,
    },
    img: {
        width: 114,
        height: 114,
        objectFit: 'cover',
    },
    productContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 15,
        borderBottom: "1px solid #f0f0f1",
        marginBottom: 10,
    },
    colorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',


    },
    color: {
        width: 15,
        height: 15,
        backgroundColor: "blue",
        borderRadius: "50%",
        marginRight: 10,
    },
    countBox: {
        borderRadius: 10,
        border: "1px solid #f0f0f1",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    h3: {
        fontSize: 14,
        [theme.breakpoints.down('sm')]:{
            fontSize: 12,
        },
        '&:hover':{
            cursor: 'pointer',
        }
    },

}));

const Product = ({id,arrayIndex}) => {
    const classes = useSttyles();
    const navigate = useNavigate();
    const product = products[id];
    return (
        <>

            <div className={classes.productContainer}>
                <div className={classes.imgPrice}>
                    <img className={classes.img} src={product.image} />
                    <Counter id={id} arrayIndex={arrayIndex} />
                </div>
                <div className={classes.details}>
                    <h3 onClick={()=>navigate(`/product/${id}`)} className={classes.h3}>{product.title}</h3>
                    <div className={classes.colorContainer}>
                        <p className={classes.colorDesciption}>رنگ:</p>
                        <div className={classes.color}></div>
                    </div>

                    <p className={classes.price} >{product.price} تومان</p>
                </div>
            </div>

        </>

    );
}

export default Product;
