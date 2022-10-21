import { makeStyles } from '@material-ui/core';
import React from 'react';
import FastSending from './FastSending';
import PresentsInDigiplus from './PresentsInDigiPlus';
import SignUpInDigiPlus from "./SignUpInDigiPlus";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        [theme.breakpoints.up('md')]:{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',           
        },
        backgroundColor: "#941b80",
        borderRadius: 20,
        padding: 20,
    }
}));

const Digiplus = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <SignUpInDigiPlus/>
            <PresentsInDigiplus/>
            <FastSending/>
        </div>
    )
}

export default Digiplus