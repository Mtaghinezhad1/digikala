import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import React from 'react'
import logo from "./../img/logo.svg"
import { useState, useEffect } from 'react';
import { NoEncryption } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: "100vh",
        width: "100vw",
    },
    mainContainer: {
        [theme.breakpoints.up('md')]: {
            border: "1px solid #f0f0f2",
            borderRadius: 10,
            boxSizing: 'border-box',
            width: 400,
            height: 440,
        },
        width: "100%",
        height: "440",
        textAlign: 'center',
        padding: 32,

    },
    formContainer: {
        textAlign: 'right',
    },
    input: {
        width: "100%",
        [theme.breakpoints.down('sm')]:{
            backgroundColor: "#f0f0f1", 
            border: "none",
            borderBottom: "3px solid #b2001a",
        },
        height: 48,
        borderRadius: 10,
        boxSizing: 'border-box',
        padding: 5,
        border: "1px solid #b2001a"
    },
    btn: {
        width: "100%",
        borderRadius: 10,
        height: 48,
    },
    h1: {
        fontSize: 20
    },
    p: {
        fontSize: 13
    },
    formPara: {
        color: "#b2001a",
        fontSize: 12,
        marginTop: 3,
        marginBottom: 32,
        opacity: props => props.isInputEmpty ? '0' : '1',
    },
    a: {
        textDecoration: 'none',
        color: "#008eb2"
    }
}));

const SignUp = () => {
    const [inputValue, setInputValue] = useState("");
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const classes = useStyles({ isInputEmpty });
    console.log(isInputEmpty);

    useEffect(() => {
        if (inputValue.length == 0) {
            setIsInputEmpty(false);
        } else {
            setIsInputEmpty(true);
        }
    });



    return (
        <div className={classes.root}>
            <div className={classes.mainContainer}>
                <img src={logo} />
                <div className={classes.formContainer}>
                    <h1 className={classes.h1}>ورود | ثبت نام</h1>
                    <p className={classes.p}>سلام!</p>
                    <p className={classes.p}>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                    <form >
                        <input onChange={(e) => setInputValue(e.target.value)} className={classes.input} type='text' />
                        <p className={classes.formPara}>لطفا این قسمت را خالی نگذارید</p>
                        <Button type='submit' className={classes.btn} variant='contained' color='secondary'>ورود</Button>
                    </form>
                    <p className={classes.p}>ورود شما به معنای پذیرش <a className={classes.a} href='#'>شرایط دیجی کالا</a> و <a className={classes.a} href='#'>قوانین حریم خصوصی</a> است</p>
                </div>

            </div>
        </div>

    )
}

export default SignUp

