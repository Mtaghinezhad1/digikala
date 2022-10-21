import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        [theme.breakpoints.up('md')]: {
            width: "40%",
            height: 258,
            backgroundPosition: 'bottom',
        },
        [theme.breakpoints.only('sm')]: {
            height: 350,
            backgroundPosition: 'left',
        },
        [theme.breakpoints.only('xs')]: {
            height: 250,
            backgroundPosition: 'left',
        },
        backgroundColor: "#941b80",
        borderRadius: 20,
        backgroundImage: "url(https://www.digikala.com/statics/img/png/digiplus/plus-widget.png)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',

    },
    h1: {
        color: "white"
    },
    h5: {
        color: "white"
    },

}));

const SignUpInDigiPlus = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <h1 className={classes.h1}>Digi plus</h1>
            <h5 className={classes.h5}>خدمات ویژه برای اعضای دیجی پلاس</h5>
            <Button className={classes.btn} size="large" variant="contained" color="secondary">عضویت</Button>
        </div>
    )
}

export default SignUpInDigiPlus