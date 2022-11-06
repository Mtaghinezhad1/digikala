import { Button, Typography, makeStyles, Hidden } from '@material-ui/core';
import React from 'react';
import more from "./../../asset/img/More.svg";
import bazzar from "./../../asset/img/coffe-bazzar.svg";
import googlePlay from "./../../asset/img/google-play.svg";
import myket from "./../../asset/img/myket.svg";
import sib from "./../../asset/img/sib-app.svg";


const useStyles = makeStyles((theme) => ({
    downloadBox: {
        backgroundColor: "#3c4b6d",
        borderRadius: 15,
        textAlign: 'center',
        padding: 15,


        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }

    },
    appListContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.up('md')]: {
            width: "75%"
        }
    },
    appListSubContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        width: "100%",
        [theme.breakpoints.up('md')]:{
            width: "80%",
        justifyContent: 'space-between',
        }
    },
    appLink: {
        display: 'block',
        marginBottom: 10,
        marginRight: 15,
    },
    appImg: {
        height: 40,
    
    },
    moreAppContainer: {
        backgroundColor: "white",
        borderRadius: 3,
        height: 40,
        width: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    },
    moreBtn: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },

    },
    Typography: {
        color: "white",
        marginBottom: 10,
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.downloadBox}>
                <Typography variant='h5' className={classes.Typography}>
                    دانلود اپلیکیشن دیجی کالا
                </Typography>
                <div className={classes.appListContainer}>
                    <div className={classes.appListSubContainer}>
                        <a className={classes.appLink} href='#'><img className={classes.appImg} src={myket} /> </a>
                        <a className={classes.appLink} href='#'><img className={classes.appImg} src={bazzar} /></a>
                        <a className={classes.appLink} href='#'><img className={classes.appImg} src={googlePlay} /></a>
                        <a className={classes.appLink} href='#'><img className={classes.appImg} src={sib} /></a>
                    </div>
                    <div className={classes.moreAppContainer} >
                        <a href='#'><img src={more} /> </a>
                    </div>
                </div>
                <Button className={classes.moreBtn} variant='contained' color='secondary'>اطلاعات بیشتر ...</Button>

            </div>
        </>
    )
}

export default Footer