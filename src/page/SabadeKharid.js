import { Container, makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import React from "react";
import PriceCard from "../component/main/sabadeKharid.js/PriceCard";
import PriceCardMobile from "../component/main/sabadeKharid.js/PriceCardMobile";
import Product from "../component/main/sabadeKharid.js/Product";
import TitleRow from "../component/main/sabadeKharid.js/TitleRow";

const useSttyles = makeStyles((theme) => ({
    container: {

        [theme.breakpoints.down('sm')]: {
            padding: 0,
        },
    },
    mainContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    productList: {
        border: "1px solid #f0f0f2",
        borderRadius: 10,
        width: "calc(100% - 300px)",
        [theme.breakpoints.down('sm')]: {
            width: "100%",
            borderBottom: "1px solid #f0f0f2",
            border: 'none',
            borderRadius: 0,
        },
    },

}));

const SabadeKharid = () => {
    const classes = useSttyles();
    const {cart, add1ToCart, remove1FromCart} = useContext(CartContext);
    return (
        <>
            <Container className={classes.container}>
                <TitleRow />
                <div className={classes.mainContainer}>
                    <div className={classes.productList}>
                        {
                            cart.map((item, index)=>{
                                return <Product key={index} arrayIndex={index} id={item.id}/>
                            })
                        }
                    </div>
                    <PriceCard />
                </div>
            </Container>
            <PriceCardMobile />
        </>

    );
}

export default SabadeKharid;
