import { makeStyles } from '@material-ui/core';
import React from 'react';
import CardMahsool from './CardMahsool';
import products from "./../../../data provider/products";


const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 20,
        border: "solid 2px #f0f0f1",
        borderRadius: 20,
        [theme.breakpoints.only('xs')]: {
            padding: 10
        }

    }

}));

const Montakhab = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.container}>
            {
                products.map((product,index)=>{
                    return (<CardMahsool {...product} key={index}/>)
                })
            }

        </div>

        </>
    )
}

export default Montakhab
