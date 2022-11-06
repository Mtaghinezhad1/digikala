import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import React from 'react';
import logo from "./../../asset/img/logo.svg";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    firstDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    signinBtn:{
        textDecoration: 'none',
        border: "1px solid #f0f0f2",
        borderRadius: 5,
        padding: "5px 10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

    }
}));

const FirstComponent = () => {
    const classes = useStyles();
    const scroll = ()=>{
        window.scrollTo({top: 0, bahavior: "smooth"});
    }
    return (
        <>
            <div className={classes.firstDiv}>
                <Link to={"/"}><img src={logo} /></Link>
                <a href='#' className={classes.signinBtn} >بازگشت به بالا <ExpandLess /></a> 
            </div>
            
        </>

    )
}

export default FirstComponent