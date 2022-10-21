import { makeStyles, Container, Grid } from '@material-ui/core';
import React from 'react';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "white",
        margin: 0,
        [theme.breakpoints.down('sm')]: {
            borderBottom: "1px solid #f0f0f2",
        }
    },
    colorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30,
    },
    colorBox: {
        width: 30,
        height: 30,
        borderRadius: "50%",
        padding: 5,
        border: "1px solid #a1a3a8",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,

    },
    colorBoxActive: {
        backgroundColor: "#00bfd6",
        marginLeft: 5,
        width: 30,
        height: 30,
        borderRadius: "50%",
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    color1: {
        backgroundColor: "red",
        borderRadius: "50%",
        border: "1px solid white",
        width: "100%",
        height: "100%",
    },
    color2: {
        backgroundColor: "green",
        borderRadius: "50%",
        border: "1px solid white",
        width: "100%",
        height: "100%",
    },
    color3: {
        backgroundColor: "grey",
        borderRadius: "50%",
        border: "1px solid white",
        width: "100%",
        height: "100%",
    },
}));

const Colors = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                <h4>رنگ: آبی</h4>
                <div className={classes.colorContainer}>
                    <div className={classes.colorBoxActive}>
                        <div className={classes.color3}></div>
                    </div>
                    <div className={classes.colorBox}>
                        <div className={classes.color2}></div>
                    </div>
                    <div className={classes.colorBox}>
                        <div className={classes.color1}></div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Colors